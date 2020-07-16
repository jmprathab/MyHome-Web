import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "../card/card.component";
import GetCommunitiesApi from "../../api/GetCommunities";

class CommunityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communities: null,
    };
  }

  componentDidMount() {
    const getCommunities = async (token) => {
      let api = new GetCommunitiesApi(token);
      let responsePromise = api.getCommunities();
      let response = await responsePromise;
      this.setState({
        communities: response.data.communities,
      });
    }
    getCommunities(this.props.token);
  }

  render() {
    return (
      <Container className="mt-5">
        <div className="row">
          {this.state.communities ? (this.state.communities.map((community) => <div key={community.communityId} className="col-md-3"><Card id={community.communityId} name={community.name} district={community.district} /></div> )) : ''}
        </div>
      </Container>
    );
  }
}

export default CommunityList;
