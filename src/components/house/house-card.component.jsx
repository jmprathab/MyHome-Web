import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GetHousesApi from "../../api/GetHouses";

class HouseCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      house: null,
    };
  }

  componentDidMount() {
    const getHouse = async (uuid, token) => {
      let api = new GetHousesApi(uuid, token);
      let responsePromise = api.getHouse();
      let response = await responsePromise;
      console.log(response.data);
      this.setState({
        data: response.data,
      });
    }
    getHouse(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <><Container>
      </Container></>
    )
  }
}

export default HouseCard;
