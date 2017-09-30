import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import '../public/styles/App.css';
// import ChannelsListWithData from './components/ChannelsListWithData';
import NotFound from './components/NotFound';
// import ChannelDetails from './components/ChannelDetails';
import Chat from './Chat/Chat'
import CaseStudiesListWithData from './components/CaseStudiesListWithData';
import CaseStudyDetails from './components/CaseStudyDetails';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  toIdValue,
} from 'react-apollo';

// new implementations
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { logout } from './helpers/auth'
import { firebaseAuth } from './config/constants'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { intlShape, injectIntl, IntlProvider, addLocaleData, defineMesssages } from 'react-intl';

import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

// Our translated strings
import localeData from './../build/locales/data.json';

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
let language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;
// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
// const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;
const messages = localeData[language];
addLocaleData([...en, ...de]);

// new implementations
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/caseStudies' />}
    />
  )
}

const networkInterface = createNetworkInterface({ uri: 'https://homepage-api.lengoo.de/graphql' });

function dataIdFromObject (result) {
  if (result.__typename) {
    if (result.position !== undefined) {
      return `${result.__typename}:${result.position}`;
    }
  }
  return null;
}

const client = new ApolloClient({
  networkInterface,
  customResolvers: {
    Query: {
      caseStudy: (_, args) => {
        return toIdValue(dataIdFromObject({ __typename: 'CaseStudy', position: args['position'] }))
      },
    },
  },
  dataIdFromObject,
});

class App extends Component {
  state = {
    authed: false,
    loading: true,
    language: language
  }
  changeLanguage = (input) => {
    this.setState({language: input});
    // this.props.data.refetch();
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    if(!window.Intl) {
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js',
        'intl/locale-data/jsonp/de.js',
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        require('intl/locale-data/jsonp/de.js');
      });
    }
    return this.state.loading === true ? <h1>Loading</h1> : (
      <IntlProvider locale={this.state.language} messages={localeData[this.state.language === 'en-US' ? 'en':this.state.language]}>
        <MuiThemeProvider>
          <ApolloProvider client={client}>
            <BrowserRouter history={history}>
                <div className="home-wrap">
                  <SideNav authed={this.state.authed} changeLanguage={this.changeLanguage} language={this.state.language === 'en-US' ? 'en':this.state.language} />
                  <div className="home-sections">
                  <div style={{flex: '1 0 auto', minHeight: '100vh'}}>
                    <Switch>
                      <PublicRoute path='/' exact component={Home} />
                      <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                      <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                      <PrivateRoute authed={this.state.authed} path='/chat' component={Chat} />
                      <PrivateRoute authed={this.state.authed} path="/caseStudies" component={(props) => <CaseStudiesListWithData language={this.state.language === 'en-US' ? 'en':this.state.language} />} />
                      <PrivateRoute authed={this.state.authed} path="/caseStudy/:caseStudyId" component={CaseStudyDetails} />
                      <Route render={() => <h3>No Match</h3>} />
                    </Switch>
                  </div>
                  <Footer/>
                  </div>
                </div>
            </BrowserRouter>
          </ApolloProvider>
        </MuiThemeProvider>
      </IntlProvider>


    );
  }
}

App.propTypes = {
  // data: React.PropTypes.shape({
  //   refetch: React.PropTypes.function
  // }).isRequired
}

export default App;
