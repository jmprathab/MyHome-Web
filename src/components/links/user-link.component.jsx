import React, { Component } from "react";
import LinkImpl from './link-impl.component';

class UserLink extends Component {
  render() {
    return (
      <LinkImpl
        link={`/user/${this.props.id}`}
      >
        {this.props.name}
      </LinkImpl>
    )
  }
}

export default UserLink;
