import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "../card/card.component";

class CommunityList extends Component {
  render() {
    return (
      <Container className="mt-5">
        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </Container>
    );
  }
}

export default CommunityList;
