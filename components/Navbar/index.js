/** @jsx jsx */
import { NavLink, Button, jsx, useColorMode } from "theme-ui";
// import Link from "next/link";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useRouter } from "next/router";
import { useFetchUser } from "../../utils/user";
import Link from "next/link";

const Navbar = (props) => {
  const { user, loading } = props;
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
        <NavLink href="/">
          <a>From Way Downtown</a>
        </NavLink>
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
              <NavLink href="/api/logout">
                <a>Logout</a>
              </NavLink>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <NavLink href="/new-post">
                <a>New Post</a>
              </NavLink>
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
