// import App from 'next/app'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "theme-ui";
import theme from "../theme/theme";

const mdComponents = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme} components={mdComponents}>
        <Navbar {...pageProps} />
        <Component {...pageProps} />
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
