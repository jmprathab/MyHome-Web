import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import RemoveHouseMemberApi from "../../api/RemoveHouseMember";

// This component is to-do
class HouseMembersEntry extends Component {
  constructor(props) {
    super(props);

    this.removeMember = this.removeMember.bind(this);
  }

  removeMember() {
    const removeHouseMember = async (houseId, uuid, token) => {
      let api = new RemoveHouseMemberApi(houseId, uuid, token);
      let responsePromise = api.removeMember();
      await responsePromise;
      window.location.reload(false);
    }
    removeHouseMember(this.props.houseId, this.props.uuid, this.props.token);
  }

  render() {
    return (
      <li className="list-group-item bg-dark">
        <div className="d-flex justify-content-between">
          {this.props.name}
          <FontAwesomeIcon onClick={this.removeMember} icon={faTimes} />
        </div>
      </li>
    )
  }
}

export default HouseMembersEntry;
