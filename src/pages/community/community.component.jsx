import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import Column from "../../components/common/column.component";
import PageRow from "../../components/common/page-row.component";
import AdminColumn from "./columns/admin-column.component";
import DetailColumn from "./columns/detail-column.component";
import HousesColumn from "./columns/houses-column.component";

const CommunityPage = ({ match, currentUser }) => (
  <div>
    {currentUser ? (
      <Container>
        <PageRow>
          <Column cols={6}>
            <DetailColumn communityId={match.params.uuid} />
          </Column>
          <Column cols={3}>
            <HousesColumn communityId={match.params.uuid} />
          </Column>
          <Column cols={3}>
            <AdminColumn communityId={match.params.uuid} />
          </Column>
        </PageRow>
      </Container>
    ) : ''}
  </div>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(CommunityPage);
