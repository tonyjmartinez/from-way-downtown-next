import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import Drawer from "../Drawer";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "black", dark: "white" };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          From Way Downtown
        </Heading>
      </Flex>

      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Drawer />
    </Flex>
  );
};

export default Header;
