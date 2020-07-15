import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../../utils/withApollo";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
    }
  }
`;

const Posts = (props) => {
  return <div>{props.data}</div>;
};

const PostsQuery = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>Error!!!</div>;
  } else if (data) {
    return <Posts data={JSON.stringify(data)} />;
  }
};

export default withApollo({ ssr: true })(PostsQuery);
