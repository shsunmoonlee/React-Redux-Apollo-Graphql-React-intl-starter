import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import {
  Link
} from 'react-router-dom'

import {
    gql,
    graphql,
} from 'react-apollo';

import { logout } from '../helpers/auth'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton/FlatButton'
import Chip from 'material-ui/Chip/Chip'
import countries from './../assets/countries'
import flagIconCSSCountryCodes from './../assets/flagIconCSSCountryCodes'
import FontIcon from 'material-ui/FontIcon/FontIcon'
import Avatar from 'material-ui/Avatar/Avatar'
import { teal500, pink500, teal200, pink200, yellow500, yellow200, deepPurple500 } from 'material-ui/styles/colors'
import './../assets/flag-icon.css'

import { FormattedMessage } from 'react-intl'
injectTapEventPlugin();

const containerStyle = {
  padding: 40,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1
}
const menuItemStyle = {
  whiteSpace: 'normal',
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: 'normal'
}
const chipAvatarStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
  borderRadius: '50%',
  backgroundSize: 'cover'
}

class SideNav extends Component {
  state = {
    language: "en"
  }

  handleLanguageChange = (event, index, value) => { this.setState({language: value}); this.props.changeLanguage(value); this.props.data.refetch();}

  render() {
    const { caseStudies, loading, error } = this.props.data;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <header>
        <div className="sideNavPosition">
          <a className="brand-logo"><h3>Lengoo</h3></a>
          <nav className="sideNavList">
          <div style={{ display: 'flex', alignItems: 'flex-end', textAlign: 'center' }}>
            <SelectField
              floatingLabelText="Language"
              value={this.state.language}
              onChange={this.handleLanguageChange}
            >
              <MenuItem value={"en"} primaryText="English" />
              <MenuItem value={"de"} primaryText="Deutch" />
            </SelectField>
          </div>

            {this.props.authed
              ? <div>
                  <RaisedButton
                    label={<FormattedMessage id="app.button.Logout"
                                      defaultMessage="Logout"
                                      description="Logout" />}
                    style={{border: 'none', color: 'black', background: '#BD5248', width: '100%', margin: '2px 0'}}
                    onClick={() => {
                      logout()
                    }}
                    className="navbar-brand"/>
                  <RaisedButton
                    label={<FormattedMessage id="app.button.Chat"
                                      defaultMessage="Chat"
                                      description="Chat" />}
                    style={{border: 'none', color: 'black', background: '#BD5248', width: '100%', margin: '2px 0'}}
                    className="navbar-brand"
                    containerElement={<Link to="/chat" className="navbar-brand" style={{color: 'black', width: '100%'}}></Link>} />
                </div>
              : <div>
                  <RaisedButton
                    label={<FormattedMessage id="app.button.login"
                                      defaultMessage="Login"
                                      description="Login" />}
                    style={{border: 'none', color: 'black', background: '#BD5248', width: '100%', margin: '2px 0'}}
                    className="navbar-brand"
                    containerElement={<Link to="/login" className="navbar-brand" style={{color: 'black', width: '100%'}}>Login</Link>} />
                  <RaisedButton
                    label={<FormattedMessage id="app.button.register"
                                      defaultMessage="Register"
                                      description="Register" />}
                    style={{border: 'none', color: 'black', background: '#BD5248', width: '100%', margin: '2px 0'}}
                    className="navbar-brand"
                    containerElement={<Link to="/register" className="navbar-brand" style={{color: 'black', width: '100%'}}></Link>} />
                </div>
            }
            <ul>
              <li>

              </li>
              <li>

              </li>
              <li className='sideNavHome'><Link key="" to={`/`}>Case Studies List</Link></li>
              {this.props.authed
                ?  caseStudies.map( cs =>
                    (
                      <li key={cs.position} className={'sideNav' + 'CaseStudy ' + (cs.position < 0 ? 'optimistic' : '')}>
                        <Link key={cs.position} to={cs.position < 0 ? `/` : `/caseStudy/${cs.position}`}>{cs.company}</Link>
                      </li>
                    )
                  )
                : null
              }
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
SideNav.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    caseStudies: PropTypes.array,
    refetch: React.PropTypes.func.isRequired
  }).isRequired,
  language: React.PropTypes.string.isRequired,
  changeLanguage: React.PropTypes.func.isRequired
};

export const caseStudiesListQuery = gql`
  query CaseStudiesListQuery($language: String!) {
  	caseStudies(locale: $language) {
  	  locale
  	  company
  	  url
  	  image1
  	  image2
  	  shortDescription
  	  industry
  	  languages
  	  textType
  	  volume
  	  longDescription
  	  challenge
  	  solution
  	  valueAdded
  	  position
  	  urlFollowingCaseStudy
  	  urlPreviousCaseStudy
  	}
  }
`;
export default graphql(caseStudiesListQuery, {
  options:
    ({language}) => ({ variables: { language } }),
    forceFetch: true,
    refetchQueries: [
      'caseStudiesListQuery',
    ],
})(SideNav);
// export default graphql(caseStudiesListQuery, {
//   options(ownProps) {
//     return {
//       variables: {
//         // This is the place where you can
//         // access your component's props and provide
//         // variables for your query
//         language: ownProps.language,
//       },
//     };
//   },
// })(SideNav);
