import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1F2D46",
    },
    secondary: {
      main: "#44B873",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F6F3F5",
    },
    text: {
      primary: "#27204C",
      secondary: "grey",
    },
  },
  typography: {
    h1: {},
    h2: {},
    h3: {
      fontWeight: 700,
    },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    body1: {},
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 10px",
        margin: "10px",
        backgroundColor: "#fff", // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
  },
});
export default theme;
