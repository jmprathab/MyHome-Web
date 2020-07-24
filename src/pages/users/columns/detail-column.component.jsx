import React, { Component } from "react";
import Card from "../../../components/card/card.component";
import UsersApi from "../../../api/Users";

class DetailColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new UsersApi().getUser(this.props.userId);
      this.setState({
        data: response.data,
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
          />
        ) : ''}
      </>
    )
  }
}

export default DetailColumn;
