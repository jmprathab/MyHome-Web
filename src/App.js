import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./pages/sign-in-and-sign-up/sign-in-and-sign-up.styles.scss";
import HomePage from "./pages/homepage/homepage.component";

import Header from "./components/header/header.component";
import { connect } from "react-redux";
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
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
