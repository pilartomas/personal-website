import React, { FunctionComponent, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { IntlProvider } from "react-intl";

import { HomePage } from "./HomePage";
import { Background } from "./Background";

const BLACK = "#000000";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: BLACK,
    },
    secondary: {
      main: BLACK,
    },
    tonalOffset: 0,
  },
});

export const App: FunctionComponent = () => {
  const [locale] = useState(navigator.language);

  return (
    <IntlProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background />
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
