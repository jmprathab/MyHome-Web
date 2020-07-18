import React from "react";
import { connect } from "react-redux";

import HouseCard from "../../components/house/house-card.component";

const HousePage = ({ match, currentUser }) => (
  <div>
    {currentUser ? <HouseCard uuid={match.params.uuid} token={currentUser.token} /> : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HousePage);
