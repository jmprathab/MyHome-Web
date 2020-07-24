import React, { Component } from "react";
import ContentBetween from "../common/content-between.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class RemoveableEntry extends Component {
  constructor(props) {
    super(props);

    this.callRemoveFunction = this.callRemoveFunction.bind(this);
  }

  callRemoveFunction() {
    this.props.removeFunction(this.props.removeObj);
  }

  render() {
    return (
      <ContentBetween>
        {this.props.children}
        <FontAwesomeIcon
          onClick={this.callRemoveFunction}
          icon={faTimes}
        />
      </ContentBetween>
    )
  }
}

export default RemoveableEntry;
