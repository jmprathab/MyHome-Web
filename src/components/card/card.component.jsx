import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card text-white bg-dark mb-3 d-inline-block">
        <div className=" card-body">
          <h4 className="card-title">{this.props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.district}</h6>
          { /* <p className="card-text">
            {this.props.description}
          </p> Description is not supported */ }
          <a href={`/community/${this.props.id}`} className="btn btn-primary">
            {" "}
            View
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
