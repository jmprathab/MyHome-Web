import React, { Component } from "react";

class CardList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush bg-dark">
        {this.props.iterationFunction()}
      </ul>
    )
  }
}

export default CardList;
