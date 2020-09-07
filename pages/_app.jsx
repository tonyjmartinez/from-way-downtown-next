// import App from 'next/app'
import Navbar from "../components/Navbar";
import { ThemeProvider } from "theme-ui";
import theme from "../theme/theme";
import { useFetchUser } from "../utils/user";
import "react-markdown-editor-lite/lib/index.css";

const mdComponents = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
};

const App = ({ Component, pageProps }) => {
  const { user, loading } = useFetchUser();
  return (
    <>
      <ThemeProvider theme={theme} components={mdComponents}>
        <Navbar {...pageProps} user={user} loading={loading} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
