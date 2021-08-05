import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import styles from "../../styles";

import { setCurrentUser } from "../../redux/user/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Text from "../common/Text";
import Avatar from "../common/Avatar";
import { faBars, faSignInAlt, faSignOutAlt, faTimes, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { darken } from "polished";
import { Link, withRouter } from "react-router-dom";

const Navbar = styled.div`
  z-index: 2;
  height: 50px;
  border-bottom: 2px solid ${styles.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  position: sticky;
  background-color: ${styles.variables.white};
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${styles.colors.white};
  border-radius: 8px;
  border: 1px solid ${styles.colors.grey};
`;
const Item = styled.li`
  padding: 0 10px;
  cursor: pointer;
  
  &:hover {
    background-color: ${darken(0.05, styles.colors.grey)};
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  display: none;
  margin-right: 10px;
  cursor: pointer;

  path {
    transition: d .5s;
  }
  
  @media screen and (max-width: 600px) {
    display: initial;
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.goToSignUp = this.goToSignUp.bind(this);
    this.goToLogin = this.goToLogin.bind(this);

    this.doSignOut = this.doSignOut.bind(this);
  }

  goToSignUp() {
    this.props.history.push('/signup');
  }

  goToLogin() {
    this.props.history.push('/login');
  }

  doSignOut() {
    this.props.setCurrentUser(null);
    localStorage.removeItem('userInfo');
  }

  render() {
    return (
      <Navbar>
        <div>
          <MenuIcon icon={this.props.menuToggled ? faTimes : faBars} onClick={this.props.onMenuToggle} />
          <Text>MyHome logo</Text>
        </div>
        <div>
          <Link to="/notifications">
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faBell} color={styles.colors.black} size="lg" />
            <Text className="fa-layers-counter" color={styles.colors.white} fontSize="2em" backgroundColor={styles.colors.red}>2</Text>
          </span>
          </Link>
          <span>
            <Avatar src="https://http.cat/400" margin="0 10px" width="25px" height="25px" />
            <Text
              fontWeight="500"
              dropdownMargin="0 0 0 -30px"
              dropdown={
                <ItemList>
                  {this.props.currentUser ?
                    <Item onClick={this.doSignOut}>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      <Text padding="0 0 0 5px">Logout</Text>
                    </Item>
                  :
                    <>
                      <Item onClick={this.goToSignUp}>
                        <FontAwesomeIcon icon={faUserPlus} />
                        <Text padding="0 0 0 5px">Sign Up</Text>
                      </Item>
                      <Item onClick={this.goToLogin}>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <Text padding="0 0 0 5px">Login</Text>
                      </Item>
                    </>
                  }
                </ItemList>
              }
            >
              {this.props.currentUser ? 'Tony Stark' : 'Guest'}
            </Text>
          </span>
        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
