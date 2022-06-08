import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "14px",
      fontWeight: 600,
      margin: 5,
      "@media (min-width:800px)": {
        fontSize: "20px",
        fontWeight: 700,
        margin: 4,
      },
    },
    h2: {
      fontSize: "11px",
      fontWeight: 700,
      margin: 5,
      "@media (min-width:600px)": {
        fontSize: "15px",
        fontWeight: 700,
        margin: 3,
      },
    },
    h3: {
      fontSize: "10px",
      fontWeight: 500,
      margin: 5,
      "@media (min-width:600px)": {
        fontSize: "13px",
        fontWeight: 500,
        margin: 3,
      },
    },
        p: {
      fontSize: "9px",
      fontWeight: 500,
      margin: 5,
      "@media (min-width:600px)": {
        fontSize: "12px",
        fontWeight: 500,
        margin: 3,
      },
    },

    button: {
      fontStyle: "italic",
    },
    poster: {
      color: "red",
    },
  },
  palette: {
    primary: {
      main: "#4615b2",
    },
    secondary: {
      main: blue[800],
      boderRadius: "0px",
    },
    footer: {
      main: "#e4e6eb",
    },
  },
  TypographyFooter: {
    color: "#fff",
    fontWeight: 700,
  },
});
