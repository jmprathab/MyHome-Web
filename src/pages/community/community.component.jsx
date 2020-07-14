import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import DetailCard from "../../components/community-page/detail-card.component";
import HousesCard from "../../components/community-page/houses-card.component";

const CommunityPage = ({ match, currentUser }) => (
  <div>
    {currentUser ? (<Container>
      <div className="mt-5 row">
        <div className="col-md-9">
          <DetailCard uuid={match.params.uuid} token={currentUser.token} />
        </div> 
        <div className="col-md-3">
          <HousesCard uuid={match.params.uuid} token={currentUser.token} />
        </div>
      </div>
    </Container>) : ''}
  </div>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(CommunityPage);
