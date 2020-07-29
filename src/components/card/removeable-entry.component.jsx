import React, { Component } from "react";
import ContentBetween from "../common/content-between.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AlignMiddle from "../common/align-middle.component";
import { Collapse, Row } from "react-bootstrap";

class RemoveableEntry extends Component {
  constructor(props) {
    super(props);

    this.callRemoveFunction = this.callRemoveFunction.bind(this);
    this.expandCollapsable = this.expandCollapsable.bind(this);

    this.state = {
      collapsed: false,
    };  
  }

  callRemoveFunction() {
    this.props.removeFunction(this.props.removeObj);
  }

  expandCollapsable() {
    const currentCollapsed = this.state.collapsed;
    this.setState({
      collapsed: !currentCollapsed,
    });
  }

  render() {
    return (
      <>
        <Row>
          <ContentBetween>
            {this.props.children}
              <AlignMiddle>
                <FontAwesomeIcon
                  onClick={this.callRemoveFunction}
                  icon={faTimes}
                />
                {this.props.expandable ? (
                  <FontAwesomeIcon
                    className="ml-3 mr-1"
                    onClick={this.expandCollapsable}
                    icon={this.state.collapsed ? faChevronDown : faChevronRight}
                  />
                ) : ''}
              </AlignMiddle>
          </ContentBetween>
        </Row>
        {this.props.expandable ? (
          <Row>
            <Collapse className="w-100" in={this.state.collapsed}>
              <div>
                {this.props.collapsedText}
              </div>
            </Collapse>
          </Row>
        ) : ''}
      </>
    )
  }
}

export default RemoveableEntry;
