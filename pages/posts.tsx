import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../utils/withApollo";
import gql from "graphql-tag";
import { useFetchUser } from "../utils/user";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
    }
  }
`;

const Posts = (props) => {
  const foo = useFetchUser({ required: true });
  console.log("foo", foo);
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    console.log(error);
    return <div>Error</div>;
  } else if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
};

export default withApollo({ ssr: true })(Posts);
