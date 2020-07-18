import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import GetUserApi from "../../../api/GetUser";
import RemoveCommunityAdministratorApi from "../../../api/RemoveCommunityAdministrator";

class AdminCardEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null,
    }
    this.removeAdmin = this.removeAdmin.bind(this);
  }

  removeAdmin() {
    const removeAdmin = async (communityId, uuid, token) => {
      console.log(communityId, uuid);
      let api = new RemoveCommunityAdministratorApi(communityId, uuid, token);
      let responsePromise = api.removeAdministrator();
      await responsePromise;
    }
    removeAdmin(this.props.communityId, this.props.uuid, this.props.token);
  }

  componentDidMount() {
    const getAdmin = async (uuid, token) => {
      let api = new GetUserApi(uuid, token);
      let responsePromise = api.getUser();
      let response = await responsePromise;
      this.setState({
        admin: response.data,
      });
    }
    getAdmin(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <>{this.state.admin ? (<li className="list-group-item bg-dark">
          <div className="d-flex justify-content-between">
            <a href={`/user/${this.state.admin.userId}`}>
              {this.state.admin.name}
            </a>
            <FontAwesomeIcon onClick={this.removeAdmin} icon={faTimes} />
          </div> 
        </li>) : ''}</>
    )
  }
}

export default AdminCardEntry;
