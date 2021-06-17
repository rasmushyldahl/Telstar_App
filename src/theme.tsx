import { createMuiTheme, ThemeOptions } from "@material-ui/core";

/** A Material UI theme utilizing the primary STARK brand colors */
export default createMuiTheme({
  palette: {
    primary: {
      main: "white",
    },
    secondary: {
      main: "#f08b1d",
    },
    attention: {
      main: "#ffe082",
    },
    error: {
      main: "#dd2c00",
    },
    succes: {
      main: "#00c853",
    },
    blue: {
      main: "#2962ff",
      secondary: "#2962ff8f",
    },
    inactive: {
      main: "#bdbdbd",
      text: "rgba(0, 0, 0, 0.54)",
    },
  },
  props: {
    MuiCard: {
      variant: "outlined",
    },
    MuiInputBase: {
      margin: "dense",
      autoComplete: "off",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiAppBar: {
      elevation: 0,
    },
    MuiAccordion: {
      square: true,
    },
    MuiPaper: {
      square: true,
    },

  },

} as ThemeOptions);
