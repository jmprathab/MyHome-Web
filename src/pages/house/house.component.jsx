import React from "react";
import { connect } from "react-redux";

import { Container } from "react-bootstrap";
import Column from "../../components/common/column.component";
import PageRow from "../../components/common/page-row.component";
import DetailColumn from "./columns/detail-column.component";
import MemberColumn from "./columns/member-column.component";

const HousePage = ({ match, currentUser }) => (
  <div>
    {currentUser ? (
      <Container>
        <PageRow>
          <Column cols={9}>
            <DetailColumn houseId={match.params.uuid} />
          </Column>
          <Column cols={3}>
            <MemberColumn houseId={match.params.uuid} />
          </Column>
        </PageRow>
      </Container>
    ) : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HousePage);
