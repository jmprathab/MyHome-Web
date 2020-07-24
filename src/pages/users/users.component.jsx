import React from "react";
import { connect } from "react-redux";

import PageRow from "../../components/common/page-row.component";
import Column from "../../components/common/column.component";
import { Container } from "react-bootstrap";
import DetailColumn from "./columns/detail-column.component";
import CommunitiesColumn from "./columns/communities-column.component";

const UsersPage = ({ match, currentUser }) => (
  <div>
    {currentUser ? (
      <Container>
        <PageRow>
          <Column cols={9}>
            <DetailColumn userId={match.params.uuid} />
          </Column>
          <Column cols={3}>
            <CommunitiesColumn userId={match.params.uuid} />
          </Column>
        </PageRow>
      </Container>
    ) : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UsersPage);
