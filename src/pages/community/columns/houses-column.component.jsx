import React, { Component } from "react";

import Card from "../../../components/card/card.component";
import CardList from "../../../components/card/card-list.component";
import HousesApi from "../../../api/Houses";
import RemoveableEntry from "../../../components/card/removeable-entry.component";
import HouseLink from "../../../components/links/house-link.component";
import CardListEntry from "../../../components/card/card-list-entry.component";
import SelectCard from "../../../components/card/select-card.component";

class HousesColumn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.removeHouse = this.removeHouse.bind(this);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await new HousesApi().getHousesOfCommunity(this.props.communityId);
    this.setState({
      data: response.data.houses,
    });
  }

  removeHouse() {
    // No method on back-end (yet)
  }

  onSubmit(values) {
    const addHouses = async () => {
      values = values.map((value) => {
        return {
          houseId: value,
          name: value,
        };
      });
      await new HousesApi().addHouses(this.props.communityId, values);
      this.getData();
    };
    addHouses();
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <Card header={'Houses'}>
              <CardList
                iterationFunction={() => {
                  return this.state.data.map((house) => {
                    return <CardListEntry key={house.houseId}>
                      <RemoveableEntry
                        removeObj={house.houseId}
                        removeFunction={this.removeHouse}
                      >
                        <HouseLink
                          id={house.houseId}
                          name={house.name}
                        />
                      </RemoveableEntry>
                    </CardListEntry>
                  });
                }}
              />
            </Card>

            <SelectCard
              creatable
              options={[]}
              placeholder={'Type house name'}
              submitText={'Add house'}
              submitFunction={this.onSubmit}
              pluralS
            />
          </>
        ) : ''}
      </>
    )
  }
}

export default HousesColumn;
