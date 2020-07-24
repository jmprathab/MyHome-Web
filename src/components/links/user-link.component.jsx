import React, { Component } from "react";
import Link from './link.component';

class UserLink extends Component {
  render() {
    return (
      <Link
        link={`/user/${this.props.id}`}
      >
        {this.props.name}
      </Link>
    )
  }
}

export default UserLink;
