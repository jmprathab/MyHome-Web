import React, { Component } from "react";

class AlignMiddle extends Component {
  render() {
    return (
      <div className="align-middle">
        {this.props.children}
      </div>
    )
  }
}

export default AlignMiddle;
