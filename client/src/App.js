import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route} from "react-router-dom";

import {theme} from "./themes/theme";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import FriendsPage from "./pages/user/Friends";
import OpinionPage from "./pages/user/Opinion";
import FriendsPoolPage from "./pages/user/Opinion";
import ProfilePage from "./pages/user/Profile";
import DashboardPage from "./pages/user/Dashboard";

import "./App.css";



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={SignupPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/user/dashboard" exact component={DashboardPage}/>
        <Route path="/user/friends" exact component={FriendsPage}/>
        <Route path="/user/friends-pool" exact component={FriendsPoolPage}/>
        <Route path="/user/opinion" exact component={OpinionPage}/>
        <Route path="/user/:user_id/profile" exact component={ProfilePage}/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
