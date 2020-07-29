import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import PageRow from "../../../components/common/page-row.component";
import Column from "../../../components/common/column.component";
import Card from "../../../components/card/card.component";
import CommunitiesApi from "../../../api/Communities";

class CommunityList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      communities: null,
    };
  }

  componentDidMount() {
    const getCommunities = async () => {
      const response = await new CommunitiesApi().getCommunities();
      this.setState({
        communities: response.data.communities,
      });
    }
    getCommunities();
  }

  render() {
    return (
      <Container>
        <PageRow>
          {this.state.communities ? (
            this.state.communities.map((community) => {
              return <Column key={community.communityId} cols={3}>
                <Card
                  title={community.name}
                  textSubtitle={community.district}
                  body={
                    <Button className={'mt-auto'} href={`/community/${community.communityId}`}>
                      View
                    </Button>
                  }
                />
              </Column>
            })
          ) : ''}
        </PageRow>
      </Container>
    );
  }
}

export default CommunityList;
