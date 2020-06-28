import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/myhome.svg";

import "./header.styles.scss";
import { setCurrentUser } from "../../redux/user/user.actions";

const doSignOut = (setCurrentUser) => {
  setCurrentUser(null);
  localStorage.removeItem("userInfo");
};

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <div className="option" onClick={(e) => doSignOut(setCurrentUser)}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
