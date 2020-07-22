import React, { Component } from "react";

import GetAdminsApi from "../../../api/GetAdmins";
import AdminsCardEntry from "./admins-card-entry.component";

class AdminCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: null,
      adminIds: null,
    };
  }

  componentDidMount() {
    const getAdminIds = async (uuid, token) => {
      let api = new GetAdminsApi(uuid, token);
      let responsePromise = api.getAdmins();
      let response = await responsePromise;
      this.setState({
        adminIds: response.data.admins,
      });
    }
    getAdminIds(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-header">
          <h4>Community Administrators</h4>
        </div>
        <ul className="list-group list-group-flush bg-dark">
          {this.state.adminIds ? (this.state.adminIds.map((id) => <AdminsCardEntry communityId={this.props.uuid} key={id.adminId} uuid={id.adminId} token={this.props.token} />)) : ''}
        </ul>
      </div>
    )
  }
}

export default AdminCard
