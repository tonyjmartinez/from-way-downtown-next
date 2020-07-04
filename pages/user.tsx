import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../utils/withApollo";
import gql from "graphql-tag";

const GET_USER = gql`
  query MyQuery {
    auth0 {
      email
      picture
    }
  }
`;

const User = (props) => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>Error</div>;
  } else if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
};

export default withApollo()(User);
