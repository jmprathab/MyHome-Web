import React, { Component } from "react";
import GetUserApi from "../../api/GetUser";

import { Container } from "react-bootstrap";
import UserCardEntry from "./user-card-entry.component";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const getData = async (uuid, token) => {
      let api = new GetUserApi(uuid, token);
      let responsePromise = api.getUser();
      let response = await responsePromise;
      console.log(response.data);
      this.setState({
        data: response.data,
      });
    }
    getData(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <>{this.state.data ? (<Container>
        <div className="mt-5 row">
          <div className="col-md-9">
            <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
              <div className="card-header">
                <h4>{this.state.data.name}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
              <div className="card-header">
                <h4>Administers communites</h4>
              </div>
              <ul className="list-group list-group-flush bg-dark">
                {this.state.data.communityIds.map(c => <UserCardEntry uuid={c} key={c} token={this.props.token} />)}
              </ul>
            </div>
          </div>
        </div>
      </Container>) : ''}</>
    )
  }
}

export default UserCard;