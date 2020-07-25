import React from "react";
import { connect } from "react-redux";
import CreateColumn from "./columns/create-column.component";
import { Container } from "react-bootstrap";
import PageRow from "../../components/common/page-row.component";
import ContentCenter from "../../components/common/content-center.component";

const CreateCommunityPage = ({ currentUser }) => (
  <div>
    {currentUser ? (
      <Container>
        <PageRow>
          <ContentCenter>
            <CreateColumn />
          </ContentCenter>
        </PageRow>
      </Container>
    ) : ''}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(CreateCommunityPage);
