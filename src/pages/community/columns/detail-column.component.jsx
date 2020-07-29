import React, { Component } from "react";
import { withRouter } from "react-router";

import Card from "../../../components/card/card.component";
import CommunitiesApi from "../../../api/Communities";
import ContentBetween from "../../../components/common/content-between.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import AlignMiddle from "../../../components/common/align-middle.component";
import ModalImpl from "../../../components/modals/modal-impl.component";

class DetailColumn extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.deleteCommunity = this.deleteCommunity.bind(this);

    this.state = {
      data: null,
      showModal: false,
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new CommunitiesApi().getCommunity(this.props.communityId);
      this.setState({
        data: response.data.communities[0],
      });
    };
    getData();
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }
  openModal() {
    this.setState({
      showModal: true,
    });
  }

  deleteCommunity() {
    const deleteCommunity = async () => {
      const response = await new CommunitiesApi().deleteCommunity(this.props.communityId);
      console.log(response.data);
      this.props.history.push('/');
    };
    deleteCommunity();
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <ModalImpl
              show={this.state.showModal}
              closeFunction={this.closeModal}
              submitFunction={this.deleteCommunity}
              title={`Delete community ${this.state.data.name}`}
              body={`Are you sure you want to delete this community?`}
              submitButtonVariant={'danger'}
              submitText={'Delete'}
            />
            <Card
              header={
                <ContentBetween>
                  {this.state.data.name}
                  <AlignMiddle>
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={this.openModal}
                    />
                  </AlignMiddle>
                </ContentBetween>
              }
              subtitle={this.state.data.district}
            />
          </>
        ) : ''}
      </>
    )
  }
}

export default withRouter(DetailColumn);
