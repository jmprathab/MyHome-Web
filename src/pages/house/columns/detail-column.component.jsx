import React, { Component } from "react";
import HousesApi from "../../../api/Houses";
import Card from "../../../components/card/card.component";

class DetailColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new HousesApi().getHouse(this.props.houseId);
      this.setState({
        data: response.data.houses[0],
      });
    };
    getData();
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <Card
            header={this.state.data.name}
          >

          </Card>
        ) : ''}
      </>
    )
  }
}

export default DetailColumn;