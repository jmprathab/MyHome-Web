import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setCurrentUser } from "../../redux/user/user.actions";

const doSignOut = (setCurrentUser) => {
  setCurrentUser(null);
  localStorage.removeItem("userInfo");
};

const NavigationBar = ({ currentUser, setCurrentUser }) => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        MyHome
      </a>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className=" navbar-toggler-icon"></span>
      </Button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item active">
            {currentUser ? (
              <Link
                to="/"
                className="nav-link"
                onClick={(e) => doSignOut(setCurrentUser)}
              >
                Logout<span className="sr-only"></span>
              </Link>
            ) : (
              <Link className="nav-link" to="/signin">
                Login<span className="sr-only"></span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
