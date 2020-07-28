import React, { Component } from "react";
import ContentBetween from "../common/content-between.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import AlignMiddle from "../common/align-middle.component";

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
          <AlignMiddle>
            <FontAwesomeIcon
              onClick={this.callRemoveFunction}
              icon={faTimes}
            />
          </AlignMiddle>
      </ContentBetween>
    )
  }
}

export default RemoveableEntry;
