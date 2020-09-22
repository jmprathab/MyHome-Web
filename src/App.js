import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import styles from "./styles";

import CommunityPage from "./pages/community/community.component";
import CreateCommunityPage from "./pages/community/create-community.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import HomePage from "./pages/homepage/homepage.component";
import CommunitiesPage from "./pages/communities/communities.component";
import HousePage from "./pages/house/house.component";
import UserPage from "./pages/users/users.component";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Sidebar from "./components/sidebar/Sidebar";
import NotFoundPage from './pages/not-found/not-found.component';

import { setCurrentUser } from "./redux/user/user.actions";
import SignIn from "./pages/sign-in-and-sign-up/SignIn";
import SignUp from "./pages/sign-in-and-sign-up/SignUp";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";

const MainContainer = styled.div`
  height: 100vh;
`;
const PageContainer = styled.div`
  display: flex;
  height: ${styles.variables.height};
`;

const Page = styled.div`
  flex: 1 1 85%;
  overflow-y: auto;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onMenuToggle = this.onMenuToggle.bind(this);

    this.state = {
      overlay: false,
    };
  }

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

  onMenuToggle() {
    console.log('Bla');
    const overlay = this.state.overlay;
    this.setState({
      overlay: !overlay,
    });
  }

  render() {
    return (
      <div>
        <MainContainer>
          <NavigationBar onMenuToggle={this.onMenuToggle} />
          <PageContainer>
            <Sidebar overlay={this.state.overlay} />
            {this.state.overlay && <Overlay onClick={this.onMenuToggle} />}
            <Page>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={HomePage} />

                  <Route exact path="/signin" component={() => <Redirect to="/login" />} />
                  <Route exact path="/login" component={() => <SignInAndSignUpPage inputBox={<SignIn />} />} />
                  <Route exact path="/signup" component={() => <SignInAndSignUpPage inputBox={<SignUp />} />} />

                  <Route exact path="/communities" component={CommunitiesPage} />
                  <Route exact path="/community/new" component={CreateCommunityPage} />
                  <Route exact path="/community/:uuid" component={CommunityPage} />

                  <Route exact path="/user/:uuid" component={UserPage} />
                  <Route exact path="/house/:uuid" component={HousePage} />

                  <Route path="*" component={NotFoundPage} />
                </Switch>
              </BrowserRouter>
            </Page>
          </PageContainer>
        </MainContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
