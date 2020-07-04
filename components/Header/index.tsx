import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import Drawer from "../Drawer";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
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

      <Drawer />
    </Flex>
  );
};

export default Header;
