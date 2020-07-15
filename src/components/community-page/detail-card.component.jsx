import React, { Component } from "react";
import GetCommunityApi from "../../api/GetCommunity";

class DetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      community: null,
    };
  }

  componentDidMount() {
    const getCommunity = async (uuid, token) => {
      let api = new GetCommunityApi(uuid, token);
      let responsePromise = api.getCommunity();
      let response = await responsePromise;
      this.setState({
        community: response.data.communities[0],
      });
    }
    getCommunity(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <div className="w-100 card text-white bg-dark mb-3 d-inline-block">
        <div className="card-header">
          <h4>{this.state.community ? this.state.community.name : ''}</h4>
        </div>
        <div className="card-body">
          <div className="card-text">
            <h6 className="card-subtitle mb-2 text-muted">{this.state.community ? this.state.community.district : ''}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailCard;
