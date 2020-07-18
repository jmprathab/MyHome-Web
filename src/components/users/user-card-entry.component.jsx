import React, { Component } from "react";

import GetCommunityApi from "../../api/GetCommunity";

class UserCardEntry extends Component {
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
      console.log(response.data);
      this.setState({
        community: response.data.communities[0],
      });
    }
    getCommunity(this.props.uuid, this.props.token);
  }

  render() {
    return (
      <>{this.state.community ? (<li className="list-group-item bg-dark">
        <a href={`/community/${this.state.community.communityId}`}>{this.state.community.name}</a>
      </li>) : ''}</>
    )
  }
}

export default UserCardEntry;