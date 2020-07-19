import React, { Component } from "react";
import GetHousesApi from "../../../api/GetHouses";
import HouseEntry from "./house-entry.component";

class HousesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: null,
    };

    this.removeHouse = this.removeHouse.bind(this);
  }

  componentDidMount() {
    const getHouses = async (uuid, token) => {
      let api = new GetHousesApi(uuid, token);
      let responsePromise = api.getHouses();
      let response = await responsePromise;
      this.setState({
        houses: response.data.houses,
      });
    }
    getHouses(this.props.uuid, this.props.token);
  }

  removeHouse(houseId) {
    console.log(houseId);
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-header">
          <h4>Houses</h4>
        </div>
        <ul className="list-group list-group-flush bg-dark">
          {this.state.houses ? this.state.houses.map((house) => <li key={house.houseId} className="list-group-item bg-dark">
            <HouseEntry house={house} />
          </li> ) : ''}
        </ul>
      </div>
    )
  }
}

export default HousesCard;
