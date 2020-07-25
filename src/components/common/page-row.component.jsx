import React, { Component } from "react";
import { Row } from "react-bootstrap";

class PageRow extends Component {
  render() {
    return (
      <Row className="mt-5">
        {this.props.children}
      </Row>
    )
  }
}

export default PageRow;
