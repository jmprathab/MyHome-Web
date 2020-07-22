import React, { Component } from "react";
import Select from "react-select";

import GetUsersApi from "../../../api/GetUsers";
import AddCommunityAdministratorsApi from "../../../api/AddCommunityAdministrators";

class AddAdminCard extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      data: null,
      selectedValues: null,
    }
  }

  componentDidMount() {
    const getUsers = async (token) => {
      let api = new GetUsersApi(token);
      let responsePromise = api.getUsers();
      let response = await responsePromise;
      this.setState({
        data: response.data.users.map(e => {
          return {
            value: e.userId,
            label: e.name,
          };
        }),
      });
    }
    getUsers(this.props.token);
  }

  handleClick() {
    const addAdmins = async (selectedValues, uuid, token) => {
      let api = new AddCommunityAdministratorsApi(selectedValues, uuid, token);
      let responsePromise = api.addAdministrators();
      await responsePromise;
      window.location.reload(false);
    }
    if (this.state.selectedValues) addAdmins(this.state.selectedValues, this.props.uuid, this.props.token);
  }

  handleChange = e => {
    this.setState({
      selectedValues: e ? e.map(e => e.value)  : null,
    });
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-body">
          <div className="card-text" style={{color: 'black'}}>
            <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={this.handleChange}
              options={this.state.data}
            />
          </div>
          <p></p>
          <button onClick={this.handleClick} className="btn btn-primary">Add administrator{this.state.selectedValues ? (this.state.selectedValues.length > 1 ? 's' : '') : ''}</button>
        </div>
      </div>
    )
  }
}

export default AddAdminCard;
