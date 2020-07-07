import React from "react";
import { Button } from "theme-ui";
import { useColorMode } from "theme-ui";
import Navbar from "../Navbar";

const Header = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  console.log("colormode", colorMode);

  return (
    <div>
      <Navbar />
      <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </Button>
    </div>
  );
};

export default Header;
