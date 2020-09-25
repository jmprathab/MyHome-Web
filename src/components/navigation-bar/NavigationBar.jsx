import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import styles from "../../styles";

import { setCurrentUser } from "../../redux/user/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Text from "../common/Text";
import Avatar from "../common/Avatar";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { darken } from "polished";

const doSignOut = () => {
  setCurrentUser(null);
  localStorage.removeItem("userInfo");
};

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
  
  @media screen and (max-width: 600px) {
    display: initial;
  }
`;

const NavigationBar = ({ currentUser, setCurrentUser, onMenuToggle }) => {
  return (
    <Navbar>
      <div>
        <MenuIcon icon={faBars} onClick={onMenuToggle} />
        <Text>MyHome logo</Text>
      </div>
      <div>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faBell} color={styles.colors.grey} size="lg" />
          <Text className="fa-layers-counter" color={styles.colors.white} fontSize="2em" backgroundColor={styles.colors.red}>2</Text>
        </span>
        <span>
          <Avatar src="https://http.cat/400" margin="0 10px" />
          <Text
            fontWeight="500"
            dropdown={currentUser ?
              <>
                <ItemList>
                  <Item onClick={doSignOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <Text>Logout</Text>
                  </Item>
                </ItemList>
              </> : false
            }
          >
            Tony Stark
          </Text>
        </span>
      </div>
    </Navbar>
  )
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
