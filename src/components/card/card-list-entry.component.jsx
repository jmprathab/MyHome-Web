import React, { Component } from "react";

class CardListEntry extends Component {
  render() {
    return (
      <li className="list-group-item bg-dark">
        {this.props.children}
      </li>
    )
  }
}

export default CardListEntry;
