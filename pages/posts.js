import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../utils/withApollo";
import gql from "graphql-tag";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
    }
  }
`;

const Posts = (props) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    console.log("error", error);
    return <div>Error</div>;
  } else if (data) {
    console.log("data", data);
    return <div>{JSON.stringify(data)}</div>;
  }
};

export default withApollo()(Posts);
