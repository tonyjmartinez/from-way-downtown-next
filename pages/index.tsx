import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Text } from "theme-ui";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
    }
  }
`;

const Home = (props) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  let txt = <div>Start</div>;
  if (loading) {
    txt = <div>Loading..</div>;
  } else if (error) {
    console.log(error);
    txt = <div>Error</div>;
  } else if (data) {
    txt = <div>{JSON.stringify(data)}</div>;
  }
  return (
    <div>
      <Navbar />
      {txt}
    </div>
  );
  // return (
  //   <>
  //     <Navbar />
  //     <Text>Hello there</Text>
  //   </div>
  // );
};

export default withApollo()(Home);
