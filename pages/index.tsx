import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Text } from "theme-ui";
import Navbar from "../components/Navbar";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Text>Hello there</Text>
    </>
  );
};

export default withApollo()(Home);
