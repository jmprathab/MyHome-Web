import React from "react";
import { connect } from "react-redux";

import HouseCard from "../../components/house/house-card.component";
import HouseMembersCard from "../../components/house/house-members-card.component";
import { Container } from "react-bootstrap";

const HousePage = ({ match, currentUser }) => (
  <div>
    {currentUser ? (<Container>
      <div className="mt-5 row">
        <div className="col-md-9">
          <HouseCard uuid={match.params.uuid} token={currentUser.token} />
        </div>
        <div className="col-md-3">
          <HouseMembersCard uuid={match.params.uuid} token={currentUser.token} />
        </div>
      </div>
    </Container>) : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HousePage);
