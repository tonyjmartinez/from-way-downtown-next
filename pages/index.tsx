import Head from "next/head";
import { withApollo } from "../utils/withApollo";
import { Button, useColorMode } from "@chakra-ui/core";

const Home = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("props", props);
  console.log("colormode", colorMode);

  const toggleDark = () => {
    console.log("toggle");
    toggleColorMode();
  };

  return (
    <>
      <a href="/api/login">Login</a>
      <Button onClick={toggleDark}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
};

export default withApollo()(Home);
