import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";
import AddHouseMembersApi from "../../api/AddHouseMembers";

class AddHouseMembersCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selectedValues: null,
    }
  }

  handleClick() {
    const addMembers = async (selectedValues, uuid, token) => {
      let api = new AddHouseMembersApi(selectedValues.map(v => {
        return {
          memberId: v,
          name: v,
        };
      }), uuid, token);
      let responsePromise = api.addMembers();
      await responsePromise;
      window.location.reload(false);
    }
    if (this.state.selectedValues) addMembers(this.state.selectedValues, this.props.uuid, this.props.token);
  }

  handleChange = v => {
    this.setState({
      selectedValues: v ? v.map(e => e.value) : null,
    });
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-body">
          <div className="card-text" style={{color: 'black'}}>
            <CreatableSelect
              closeMenuOnSelect={false}
              isMulti
              onChange={this.handleChange}
              placeholder={'Type a member name'}
            />
          </div>
          <p></p>
          <button onClick={this.handleClick} className="btn btn-primary">Add member{this.state.selectedValues ? (this.state.selectedValues.length > 1 ? 's' : '') : ''}</button>
        </div>
      </div>
    )
  }
}

export default AddHouseMembersCard;
