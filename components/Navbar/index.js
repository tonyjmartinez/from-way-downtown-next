/** @jsx jsx */
import { NavLink, Button, jsx, useColorMode } from "theme-ui";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";

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
        py: 2,
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
          <Button>Home</Button>
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
                <Button>Logout</Button>
              </Link>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Link href="/new-post">
                <MdAddCircleOutline size={50} />
              </Link>
            </div>
          </>
        ) : (
          <Link href="/api/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
