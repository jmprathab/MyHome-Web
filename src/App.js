import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import CommunityPage from "./pages/community/community.component";
import CreateCommunityPage from "./pages/community/create-community.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import HousePage from "./pages/house/house.component";
import UserPage from "./pages/users/users.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";

import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    // Get user details from localStorage and save to react store
    try {
      var info = localStorage.getItem("userInfo");
      if (info) {
        let userInfo = JSON.parse(info);
        console.log("Loaded UserId from storage : " + userInfo.userId);
        console.log("Loaded token from storage : " + userInfo.token);
        this.props.setCurrentUser({
          userId: userInfo.userId,
          token: userInfo.token,
        });
      } else {
        console.log("user info not found");
      }
    } catch {
      console.log("Cannot find info from localStorage");
    }
  }
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/signin" component={SignInAndSignUpPage} />
              <Route exact path="/community/new" component={CreateCommunityPage} />
              <Route exact path="/community/:uuid" component={CommunityPage} />
              <Route exact path="/user/:uuid" component={UserPage} />
              <Route exact path="/house/:uuid" component={HousePage} />
            </Switch>
          </BrowserRouter>
          {/* <CommunityList /> */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
