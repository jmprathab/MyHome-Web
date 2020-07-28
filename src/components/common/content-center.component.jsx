import React, { Component } from "react";

class ContentCenter extends Component {
  render() {
    return (
      <div className="w-100 d-flex justify-content-center">
        {this.props.children}
      </div>
    )
  }
}

export default ContentCenter;
