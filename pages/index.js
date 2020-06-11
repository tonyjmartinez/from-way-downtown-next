import Head from "next/head";
import { withApollo } from "../utils/withApollo";

const Home = () => {
  return (
    <div>
      <a href="/api/login">Login</a>
    </div>
  );
};

export default withApollo()(Home);
