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
        {!loading && user ? (
          <>
            <div>
              <Link href="/api/logout">
                <a>Logout</a>
              </Link>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Link href="/new-post">
                <a>New Post</a>
              </Link>
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
