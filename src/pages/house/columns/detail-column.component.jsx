import React, { Component } from "react";
import HousesApi from "../../../api/Houses";
import Card from "../../../components/card/card.component";
import ContentBetween from "../../../components/common/content-between.component";
import AlignMiddle from "../../../components/common/align-middle.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalImpl from "../../../components/modals/modal-impl.component";

class DetailColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      showModal: false,
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new HousesApi().getHouse(this.props.houseId);
      this.setState({
        data: response.data.houses[0],
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

  deleteHouse() {
    // No method on back-end (yet)
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <ModalImpl
              show={this.state.showModal}
              closeFunction={this.closeModal}
              submitFunction={this.deleteHouse}
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
            />
          </>
        ) : ''}
      </>
    )
  }
}

export default DetailColumn;
