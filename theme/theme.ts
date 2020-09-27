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

  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  space: ["0rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"],
  styles: {
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: [2, 3],
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
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
