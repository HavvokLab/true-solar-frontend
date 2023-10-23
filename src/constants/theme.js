const theme = {
  palette: {
    white: "#FFFFFF",
    textColor: "#707070",
    bgColor: "#828282",
    activeColor: "#0a1832",
    tableBorderColor: "#dee2e6",
    tableBackgroundColor: "#eff3f6",
    tableTextColor: "#212529",
    yellow: "#fffbf2",
    primary: {
      main: "#54CC96",
    },
    secondary: {
      main: "#ff5560",
    },
    error: {
      main: "#ff5560",
    },
  },
  zIndex: {
    drawer: 1,
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: "16px",
        textTransform: "none",
      },
      contained: {
        color: "white !important",
      },
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    // "fontSize": 14,
    // "fontWeightLight": 300,
    // "fontWeightRegular": 400,
    // "fontWeightMedium": 500
  },
};
export default theme;
