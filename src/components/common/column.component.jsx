import React, { Component } from "react";

class Column extends Component {
  render() {
    return (
      <div className={`col-md-${this.props.cols} mb-2`}>
        {this.props.children}
      </div>
    )
  }
}

export default Column;
