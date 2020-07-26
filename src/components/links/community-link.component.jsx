import React, { Component } from "react";
import Link from "./link-impl.component";

class CommunityLink extends Component {
  render() {
    return (
      <Link link={`/community/${this.props.id}`}>
        {this.props.name}
      </Link>
    )
  }
}

export default CommunityLink;
