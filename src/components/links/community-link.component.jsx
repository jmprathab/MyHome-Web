import React, { Component } from "react";
import LinkImpl from "./link-impl.component";

class CommunityLink extends Component {
  render() {
    return (
      <LinkImpl link={`/community/${this.props.id}`}>
        {this.props.name}
      </LinkImpl>
    )
  }
}

export default CommunityLink;
