import React, { FunctionComponent, useState } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import {
  AppBar,
  createMuiTheme,
  ThemeProvider,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { IntlProvider } from "react-intl";
import { Background } from "./Background";

const theme = createMuiTheme({});

export const App: FunctionComponent = () => {
  const [locale] = useState(navigator.language);

  return (
    <IntlProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <Router>
          <Background />
          <AppBar position="static">
            <Toolbar>
              <Button variant="outlined" component={Link} to="/">
                <Typography variant="h5">Tomas Pilar</Typography>
              </Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/">Home</Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
