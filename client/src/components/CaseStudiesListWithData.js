import React, {propTypes} from 'react';
import {
  Link
} from 'react-router-dom'

import {
  gql,
  graphql,
} from 'react-apollo';

// import AddChannel from './AddChannel';

const CaseStudiesList = ({ data: {loading, error, caseStudies, auth }}) => {
  // const goTo = (route) => {
  //   this.props.history.replace(`/${route}`)
  // }
  //   // This function calls on the auth login() function and logs in a user with Auth0
  // const login = () => {
  //   this.props.auth.login();
  // }
  //   // This function calls on the auth logout() function and clears the localStorage thereby logging a user out.
  // const logout = () => {
  //   this.props.auth.logout();
  // }

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  // const { isAuthenticated } = this.props.auth;
  return (
    <section className="caseStudiesList">
      <div className="flex flex--space-around flex--wrap">
        { caseStudies.map( cs =>
          (<div key={cs.position} className={'col-1 caseStudy ' + (cs.position < 0 ? 'optimistic' : '')}>
            <Link to={cs.position < 0 ? `/` : `caseStudy/${cs.position}`}>
              <h2>{cs.company}</h2>
              <p>{cs.shortDescription}</p>
              <p>{cs.industry}</p>
            </Link>
          </div>)
        )}
      </div>
    </section>
  );
};

CaseStudiesList.propTypes = {
  language: React.PropTypes.string.isRequired,
  // data: React.PropTypes.shape({
  //   refetch: React.PropTypes.func
  // }).isRequired
}

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
export default graphql(caseStudiesListQuery,
  { options:
    ({language}) => ({ variables: { language } }),
    forceFetch: true,
    refetchQueries: [
      'caseStudiesListQuery',
    ],
  }
)(CaseStudiesList);

// export default graphql(caseStudiesListQuery, {
//   options(ownProps):
//     (ownProps) => ({ variables: { language: ownProps.language } }),
//     pollInterval: 5000,
// })(CaseStudiesList);

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
// })(CaseStudiesList);
