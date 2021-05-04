import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage}/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
