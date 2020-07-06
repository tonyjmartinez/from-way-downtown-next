// import App from 'next/app'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { ThemeProvider } from "theme-ui";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isMounted && (
          <>
            <Header {...pageProps} />
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

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

export default MyApp;
