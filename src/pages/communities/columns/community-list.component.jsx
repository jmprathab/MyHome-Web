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
      filteredCommunities : [],
      searchText: ''
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

  handleSearchText = (e) =>{
    const searchText = e.target.value.trim().toLowerCase();
    const filteredCommunities = [...this.state.communities].filter((c)=>c.name.toLowerCase().includes(searchText))      
    this.setState({searchText : e.target.value, filteredCommunities})
  }

  render() {

    const renderCommunities = this.state.searchText ? this.state.filteredCommunities : this.state.communities;

    return (
      <Container>
          <div className="input-group mt-4 mx-auto" style={{maxWidth: 360}}>
            <input type="text" className="form-control"  placeholder="Search Communities.." value={this.state.searchText} onChange={this.handleSearchText}/>
            </div>
        <PageRow>
          {this.state.communities ? (
            renderCommunities.length ? renderCommunities.map((community) => {
              return <Column key={community.communityId} cols={3}>
                <Card
                  title={community.name}
                  textSubtitle={community.district}
                  cardClasses={'h-100'}
                  bodyClasses={'h-100'}
                  body={
                    <Button className={'mt-auto'} href={`/community/${community.communityId}`}>
                      View
                    </Button>
                  }
                />
              </Column>
            }) : <div className="mx-auto"><span style={{fontSize: 24}}>Community Not Found !!</span></div> 
          ) : ''}
        </PageRow>
      </Container>
    );
  }
}

export default CommunityList;
