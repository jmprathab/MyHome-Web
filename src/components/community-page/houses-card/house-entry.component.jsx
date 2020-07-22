import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class HouseEntry extends Component {
  constructor(props) {
    super(props);
    this.removeHouse = this.removeHouse.bind(this);
  }

  removeHouse() {
    // Not functional yet
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <a href={`/house/${this.props.house.houseId}`}>
          {this.props.house.name}
        </a>
        <FontAwesomeIcon onClick={this.removeHouse} icon={faTimes} />
      </div>
    )
  }
}

export default HouseEntry;
