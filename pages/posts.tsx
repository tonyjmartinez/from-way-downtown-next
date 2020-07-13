import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../utils/withApollo";
import gql from "graphql-tag";
import { useFetchUser } from "../utils/user";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
    }
  }
`;

const GET_OLD_PUBLIC_TODOS = gql`
  query getOldPublicTodos {
    posts(
      where: { is_public: { _eq: true } }
      limit: 7
      order_by: { created_at: desc }
    ) {
      id
      title
      created_at
      user {
        name
      }
    }
  }
`;

const Posts = (props) => {
  const { loading, error, data } = useQuery(GET_OLD_PUBLIC_TODOS);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    console.log("error", error);
    return <div>Error</div>;
  } else if (data) {
    return (
      <div>
        <Navbar />
        {JSON.stringify(data)}
      </div>
    );
  }
};

export default withApollo()(Posts);
