import React, { Component } from "react";

import GetUserApi from "../../../api/GetUser";

class AdminCardEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null,
    }
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
      <>{this.state.admin ? (<li className="list-group-item bg-dark"><a href={`/users/${this.state.admin.userId}`}>{this.state.admin.name}</a></li>) : ''}</>
    )
  }
}

export default AdminCardEntry;
