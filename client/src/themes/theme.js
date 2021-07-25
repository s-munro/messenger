import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      fontSize: "18px",
      height: "90px",
      width: "270px",
      boxShadow: "0 0 8px 0 rgba(0 0 0 / 20%)"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
