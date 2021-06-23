import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {theme} from "./themes/theme";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import FriendsPage from "./pages/user/Friends";
import OpinionPage from "./pages/user/Opinion";
import FriendsPoolPage from "./pages/user/Opinion";
import ProfilePage from "./pages/user/Profile";
import DashboardPage from "./pages/user/Dashboard";
import NotFound from "./pages/NotFound";

import "./App.css";
import ProtectedRoute from "./pages/user/HOC/ProtectedRoute";



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignupPage}/>
          <Route path="/login" exact component={LoginPage}/>
          <ProtectedRoute path="/user/dashboard" component={DashboardPage}/>
          {/*<Route path="/user/dashboard" exact component={DashboardPage}/>*/}
          <Route path="/user/friends" exact component={FriendsPage}/>
          <Route path="/user/friends_pool" exact component={FriendsPoolPage}/>
          <Route path="/user/opinion" exact component={OpinionPage}/>
          <ProtectedRoute path="/user/:user_id/profile" exact component={ProfilePage}/>
          {/*<Route path="/user/:user_id/profile" exact component={ProfilePage}/>*/}
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
