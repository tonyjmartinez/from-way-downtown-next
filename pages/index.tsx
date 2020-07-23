import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Text } from "theme-ui";
import gql from "graphql-tag";
import Posts from "../components/Posts";
import { Grid } from "theme-ui";
import { useFetchUser } from "../utils/user";

const Home = (props) => {
  const { user, loading } = useFetchUser();
  return (
    <div>
      <Grid width={[300]} gap={10}>
        {!loading && user && <Posts />}
      </Grid>
    </div>
  );
};

export default Home;
