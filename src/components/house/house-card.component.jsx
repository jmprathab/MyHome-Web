import React, { Component } from "react";
import GetHouseApi from "../../api/GetHouse";

class HouseCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const getHouse = async (uuid, token) => {
      let api = new GetHouseApi(uuid, token);
      let responsePromise = api.getHouse();
      let response = await responsePromise;
      this.setState({
        data: response.data.houses[0],
      });
    }
    getHouse(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-header">
          <h4>{this.state.data ? this.state.data.name : ''}</h4>
        </div>
      </div>
    )
  }
}

export default HouseCard;
