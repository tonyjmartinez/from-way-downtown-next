/** @jsx jsx */
import { NavLink, Button, jsx, useColorMode } from "theme-ui";
// import Link from "next/link";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useRouter } from "next/router";
import { useFetchUser } from "../../utils/user";

const Navbar = () => {
  const router = useRouter();
  const [colorMode, setColorMode] = useColorMode();
  const { user, loading } = useFetchUser();
  // TODO: dont shot login if they logged in
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
        <NavLink href="/">From Way Downtown</NavLink>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {!loading && user ? (
          <>
            <div>
              <NavLink href="/api/logout">Logout</NavLink>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <NavLink href="/posts">Posts</NavLink>
            </div>
          </>
        ) : (
          <NavLink href="/api/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
