import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";

import theme from "./Pages/theme";

const App = () => {
  return (
    <ScopedCssBaseline>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </ScopedCssBaseline>
  );
};

export default App;
