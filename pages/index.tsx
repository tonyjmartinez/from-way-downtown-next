import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Text } from "theme-ui";

const Home = (props) => {
  return (
    <>
      <Text>Hello there</Text>
    </>
  );
};

export default withApollo()(Home);
