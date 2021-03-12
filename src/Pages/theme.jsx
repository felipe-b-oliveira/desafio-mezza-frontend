import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  "@global": {
    ul: {
      margin: 0,
      padding: 10,
      listStyle: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: "#e1e2e2",
        },
      },
    },
  },
});

export default theme;
