import React, { Component } from "react";
import GetHouseMembersApi from "../../api/GetHouseMembers";

import HouseMembersEntry from "./house-members-entry.component";

class HouseMembersCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: null,
    }
  }

  componentDidMount() {
    const getMembers = async (uuid, token) => {
      let api = new GetHouseMembersApi(uuid, token);
      let responsePromise = api.getMembers();
      let response = await responsePromise;
      this.setState({
        members: response.data.members,
      });
    }
    getMembers(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-header">
          <h4>Members</h4>
        </div>
        <ul className="list-group list-group-flush bg-dark">
          <li>{JSON.stringify(this.state.members)}</li>
          {this.state.members ? this.state.members.map(e => <HouseMembersEntry uuid={e.memberId} key={e.memberId} token={this.props.token} />) : ''}
        </ul>
      </div>
    )
  }
}

export default HouseMembersCard;