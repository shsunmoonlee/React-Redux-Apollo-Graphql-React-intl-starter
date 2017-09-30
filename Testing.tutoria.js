How to write tests for react-apollo
https://stackoverflow.com/questions/41103597/how-make-unit-test-with-react-apollo-component

First, you can separate the definition of your component from the wrapping of it in Apollo's graphql() HOC. Then, you can continue to export default the Apollo-ized component, but you can export the bare component as a named export:

export const ReviewList = React.createClass({
  // ...
});

export default graphql(allCodeReviews)(ReviewList);
...in your normal code, where you want it to be connected through Apollo, you'd continue to import the default like this:

import ReviewList from 'components/tibco/review-list/review-list';
...but in your unit test code, you'd used the named import like this:

import { ReviewList } from 'components/tibco/review-list/review-list’;


it('executes a query', (done) => {

  const query = gql` query people { allPeople(first: 1) { people { name } } }`;
  const data = { allPeople: { people: [ { name: 'Luke Skywalker' } ] } };
  const networkInterface = mockNetworkInterface({ request: { query }, result: { data } });
  const client = new ApolloClient({ networkInterface });

  const withGraphQL = graphql(query);

  class Container extends Component {
    componentWillReceiveProps(props) {
      expect(props.data.loading).to.be.false;
      expect(props.data.allPeople).to.deep.equal(data.allPeople);
      done();
    }
    render() {
      return null;
    }
  };

  const ContainerWithData = withGraphQL(Container);

  mount(<ApolloProvider client={client}><ContainerWithData /></ApolloProvider>);

});
