import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Text } from "theme-ui";
import gql from "graphql-tag";
import { useFetchUser } from "../utils/user";
import Posts from "./posts";

const Home = (props) => {
  const { loading, user } = useFetchUser();
  console.log("loading", loading);
  console.log("user", user);

  return user ? <Posts /> : <Text>Hello there</Text>;
};

export default Home;
