import React, { Component } from "react";
import CardList from "../../../components/card/card-list.component";
import CardListEntry from "../../../components/card/card-list-entry.component";
import RemoveableEntry from "../../../components/card/removeable-entry.component";
import UserLink from "../../../components/links/user-link.component";
import CommunityAdminsApi from "../../../api/CommunityAdmins";
import UsersApi from "../../../api/Users";
import Card from "../../../components/card/card.component";
import SelectCard from "../../../components/card/select-card.component";

class AdminColumn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.removeAdmin = this.removeAdmin.bind(this);

    this.state = {
      data: [],
      options: [],
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new CommunityAdminsApi(this.props.communityId).getAdmins();
      response.data.admins.map(v => v.adminId).forEach(async (id) => {
        const userResponse = await new UsersApi().getUser(id);
        const modifiedData = this.state.data;
        modifiedData.push({
          id: userResponse.data.userId,
          name: userResponse.data.name,
        });
        this.setState({
          data: modifiedData,
        });
      });
    };
    getData();

    const getOptions = async () => {
      const response = await new UsersApi().getUsers();
      this.setState({
        options: response.data.users.map(v => {
                  return {
                    value: v.userId,
                    label: v.name,
                  };
                }),
      });
    };
    getOptions();
  }

  onSubmit(values) {
    const addAdmins = async () => {
      await new CommunityAdminsApi(this.props.communityId).addAdmins(values);
      window.location.reload();
    };
    addAdmins();
  }

  removeAdmin(obj) {
    const removeAdmins = async () => {
      await new CommunityAdminsApi(this.props.communityId).removeAdmin(obj);
      window.location.reload(false);
    };
    removeAdmins();
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <Card
              header={'Community Administrators'}
            >
              <CardList
                iterationFunction={() => {
                  return this.state.data.map((value) => {
                    return <CardListEntry key={value.id}>
                      <RemoveableEntry
                        removeObj={value.id}
                        removeFunction={this.removeAdmin}
                      >
                        <UserLink
                          id={value.id}
                          name={value.name}
                        />
                      </RemoveableEntry>
                    </CardListEntry>
                  });
                }}
              />
            </Card>

            <SelectCard
              options={this.state.options}
              submitText={'Add administrator'}
              submitFunction={this.onSubmit}
              pluralS
            />
          </>
        ) : ''}
      </>
    )
  }
}

export default AdminColumn;
