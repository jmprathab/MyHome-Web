import React from "react";
import { connect } from "react-redux";

import UserCard from "../../components/users/user-card.component";

const UsersPage = ({ match, currentUser }) => (
  <div>
    {currentUser ? <UserCard uuid={match.params.uuid} token={currentUser.token} /> : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UsersPage);
