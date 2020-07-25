import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkImpl extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        {this.props.children}
      </Link>
    )
  }
}

export default LinkImpl;
