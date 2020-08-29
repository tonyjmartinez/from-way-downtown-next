/** @jsx jsx */
import Posts from "../components/Posts";
import { Grid, Container, jsx, Box } from "theme-ui";
import { useFetchUser } from "../utils/user";

const Home = () => {
  const { user, loading } = useFetchUser();
  return (
    <div style={{ width: "90%", margin: "2em auto" }}>
      <Grid width={[300, 400, 500]} gap={5}>
        <Box>{!loading && user && <Posts />}</Box>
      </Grid>
    </div>
  );
};

export default Home;
