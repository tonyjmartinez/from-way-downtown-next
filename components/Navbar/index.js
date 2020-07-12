/** @jsx jsx */
import { Button, jsx, useColorMode } from "theme-ui";
import Link from "next/link";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "repeat(3, 1fr)",
        px: 3,
        py: 4,
        alignItems: "center",
        variant: "styles.header",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      {colorMode === "default" ? (
        <FaRegMoon
          size={32}
          onClick={(e) => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        />
      ) : (
        <FaRegSun
          size={32}
          onClick={(e) => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        />
      )}
      {/* <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </Button> */}
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <a>From Way Downtown</a>
        </Link>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/api/login">
          <a>Login</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
