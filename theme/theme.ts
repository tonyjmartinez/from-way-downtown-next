import { bulma, dark } from "@theme-ui/presets";

export default {
  colors: {
    modes: {
      default: {
        ...bulma.colors,
        // background: "#fff",
        // primary: "#4dabf5",
        // text: "0A0A0A",
      },
      dark: {
        ...dark.colors,
      },
    },
  },
  fonts: {
    body:
      'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    heading: "inherit",
    monospace: "monospace",
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3rem",
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 500,
  },
  space: ["0rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 2,
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 2,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 3,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: 1,
    },
    code: {},
    pre: {},
    hr: {
      bg: "muted",
      border: 0,
      height: "1px",
      m: 3,
    },
  },
  cards: {
    primary: {
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      padding: 2,
      borderRadius: 4,
    },
  },
  // styles: {
  //   root: {
  //     bg: "background",
  //     transition: "all 2s",
  //   },
  // },
  // buttons: {
  //   primary: {
  //     color: "background",
  //     bg: "primary",
  //   },
  //   secondary: {
  //     color: "background",
  //     bg: "secondary",
  //   },
  // },
};
