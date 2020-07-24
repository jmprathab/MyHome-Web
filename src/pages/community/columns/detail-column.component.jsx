import React, { Component } from "react";
import Card from "../../../components/card/card.component";
import CommunitiesApi from "../../../api/Communities";

class DetailColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new CommunitiesApi().getCommunity(this.props.communityId);
      this.setState({
        data: response.data.communities[0],
      });
    };
    getData();
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <Card
            header={this.state.data.name}
            subtitle={this.state.data.district}
          />
        ) : ''}
      </>
    )
  }
}

export default DetailColumn;
