import React, { Component } from "react";
import Card from "../../../components/card/card.component";
import UsersApi from "../../../api/Users";
import CardList from "../../../components/card/card-list.component";
import CommunitiesApi from "../../../api/Communities";
import CardListEntry from "../../../components/card/card-list-entry.component";
import CommunityLink from "../../../components/links/community-link.component";

class CommunitiesColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new UsersApi().getUser(this.props.userId);
      response.data.communityIds.forEach(async (id) => {
        const communityResponse = await new CommunitiesApi().getCommunity(id);
        const modifiedData = this.state.data;
        modifiedData.push({
          id: communityResponse.data.communities[0].communityId,
          name: communityResponse.data.communities[0].name,
        });
        this.setState({
          data: modifiedData, 
        });
      });
    };
    getData();
  }

  render() {
    return (
      <>
        {this.state.data ? (
          
          <Card
            header={'Administers communities'}
          >
            <CardList
              iterationFunction={() => {
                return this.state.data.map((community) => {
                  return <CardListEntry>
                    <CommunityLink
                      id={community.id}
                      name={community.name}
                    />
                  </CardListEntry>
                })
              }}
            />
          </Card>
        ) : ''}
      </>
    )
  }
}

export default CommunitiesColumn;
