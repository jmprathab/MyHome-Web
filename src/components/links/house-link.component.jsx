import React, { Component } from "react";
import LinkImpl from "./link-impl.component";

class HouseLink extends Component {
  render() {
    return (
      <LinkImpl link={`/house/${this.props.id}`}>
        {this.props.name}
      </LinkImpl>
    )
  }
}

export default HouseLink;
