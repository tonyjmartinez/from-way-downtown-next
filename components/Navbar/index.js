/** @jsx jsx */
import { Button, jsx, useColorMode } from "theme-ui";
import Link from "next/link";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
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
        <Button onClick={() => router.push("/api/login")}>Login</Button>
        <Button onClick={() => router.push("/api/logout")}>Logout</Button>
        <Button onClick={() => router.push("/posts")}>Posts</Button>
      </div>
    </header>
  );
};

export default Navbar;
