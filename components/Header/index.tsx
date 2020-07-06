import React from "react";
import { Button } from "theme-ui";
import { useColorMode } from "theme-ui";

const Header = (props) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div>
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
