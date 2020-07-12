import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card text-white bg-dark mb-3 d-inline-block">
        <div className=" card-body">
          <h4 className="card-title">Community 3</h4>
          <h6 className="card-subtitle mb-2 text-muted">Delhi</h6>
          <p className="card-text">
            Occaecat commodo amet deserunt elit ut irure commodo enim sit id
            nostrud.
          </p>
          <a href="/" className="btn btn-primary">
            {" "}
            View
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
