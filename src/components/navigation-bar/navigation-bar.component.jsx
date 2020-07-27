import React from "react";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { setCurrentUser } from "../../redux/user/user.actions";

const doSignOut = (setCurrentUser) => {
  setCurrentUser(null);
  localStorage.removeItem("userInfo");
};

const NavigationBar = ({ currentUser, setCurrentUser }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">MyHome</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/community/new">Create community</Nav.Link>
          {currentUser ? (
            <Nav.Link to="/signin" onClick={(e) => doSignOut(setCurrentUser)}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link to="/signin" href="/signin">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
