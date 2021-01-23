import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
//import theme from "./themes/theme";

/*const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});*/

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#fbfbfb",
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
themeLight.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [themeLight.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

themeLight.typography.h5 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [themeLight.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
