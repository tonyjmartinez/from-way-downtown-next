import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Text } from "theme-ui";
import gql from "graphql-tag";
import { useFetchUser } from "../utils/user";
import Posts from "../components/Posts";

const Home = (props) => {
  const { loading, user } = useFetchUser({ required: true });

  return <Posts />;
};

export default Home;
