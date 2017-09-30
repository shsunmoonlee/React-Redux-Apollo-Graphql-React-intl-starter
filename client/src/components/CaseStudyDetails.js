import React from 'react';
import NotFound from './NotFound';
import { withRouter } from 'react-router';
// import firebase from 'firebase';

import {
    gql,
    graphql,
} from 'react-apollo';

const CaseStudyDetails = ({ data: {loading, error, caseStudy }, match }) => {
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if(caseStudy === null){
    return <NotFound />
  }

  return (
    <div>
      <div className="caseStudy">
    	  <h1>{caseStudy.company}</h1>
    	  <h3>{caseStudy.shortDescription}</h3>

    	  <p>{caseStudy.longDescription}</p>
    	  <p>{caseStudy.challenge}</p>
    	  <p>{caseStudy.solution}</p>
    	  <p>{caseStudy.valueAdded}</p>
    	  <p>{caseStudy.position}</p>
    	  <p>{caseStudy.urlFollowingCaseStudy}</p>
    	  <p>{caseStudy.urlPreviousCaseStudy}</p>
    	  <p>{caseStudy.industry}</p>
    	  <p>{caseStudy.languages}</p>
    	  <p>{caseStudy.textType}</p>
    	  <p>{caseStudy.volume}</p>
    	  <p>{caseStudy.locale}</p>
    	  <p>{caseStudy.url}</p>
    	  <p>{caseStudy.image1}</p>
    	  <p>{caseStudy.image2}</p>
      </div>
    </div>);
}

export const caseStudyDetailsQuery = gql`
  query CaseStudyDetailsQuery($caseStudyId : Int!) {
    caseStudy(position: $caseStudyId) {
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

export default (graphql(caseStudyDetailsQuery, {
  options: (props) => ({
    variables: { caseStudyId: props.match.params.caseStudyId },
  }),
  forceFetch: true,
})(withRouter(CaseStudyDetails)));
