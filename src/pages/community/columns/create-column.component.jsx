import React, { Component } from "react";
import CommunitiesApi from "../../../api/Communities";

class CreateColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0, // status - 0 indicates component after its initialization, 1 indicates error due to API call, 2 indicates success, 3 indicates error due to variables not being set
      name: '',
      district: '',
    };
  }

  handleChange = (event) => {
    const { name, value} = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, district } = this.state;

    if (!name || !district) {
      this.setState({
        status: 3,
      });
      return;
    }

    try {
      this.createCommunity(name, district);
      this.setState({
        name: '',
        district: '',
      });
    } catch (error) {
      console.error(error);
    }
  }

  createCommunity = (name, district) => {
    const responsePromise = new CommunitiesApi().createCommunity(name, district);
    responsePromise
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            status: 2,
          });
        } else {
          this.setState({
            status: 1,
          });
        }
        return res.data;
      })
      .then((res) => {
        console.log(res);
        return res.communityId;
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          status: 1,
        });
      });
  }

  render() {
    const { name, district } = this.state;
    return (
      <div>
        <h3>Create a community</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="createCommunityInputName">Name</label>
            <input
              name="name"
              id="createCommunityInputName"
              type="name"
              className="form-control"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="createCommunityInputDistrict">District</label>
            <input
              name="district"
              id="createCommunityInputDistrict"
              type="district"
              className="form-control"
              value={district}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create community
            </button>
          </div>
          <>
            {this.state.status === 1 ? (
              <span style={{color: 'red'}}>
                An error occurred!
              </span>
            ) : ''}
            {this.state.status === 2 ? (
              <span style={{color: 'green'}}>
                Creation successfull! Redirecting...
              </span>
            ) : ''}
            {this.state.status === 3 ? (
              <span style={{color: 'red'}}>
                All fields have to be set
              </span>
            ) : ''}
          </>
        </form>
      </div>
    )
  }
}

export default CreateColumn;
