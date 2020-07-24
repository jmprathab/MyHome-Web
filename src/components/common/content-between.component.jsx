import React, { Component } from "react";

class ContentBetween extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        {this.props.children}
      </div>
    )
  }
}

export default ContentBetween;