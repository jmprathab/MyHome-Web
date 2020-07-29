import React, { Component } from "react";
import Card from "../../../components/card/card.component";
import HousesApi from "../../../api/Houses";
import CardList from "../../../components/card/card-list.component";
import RemoveableEntry from "../../../components/card/removeable-entry.component";
import CardListEntry from "../../../components/card/card-list-entry.component";
import SelectCard from "../../../components/card/select-card.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";
import FormFileInput from "react-bootstrap/esm/FormFileInput";
import AlignMiddle from "../../../components/common/align-middle.component";
import ContentBetween from "../../../components/common/content-between.component";

class MemberColumn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.removeMember = this.removeMember.bind(this);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const getData = async () => {
      const response = await new HousesApi().getHouseMembers(this.props.houseId);
      this.setState({
        data: response.data.members,
      });
    };
    getData();
  }

  onSubmit(values) {
    const addMembers = async () => {
      values = values.map((value) => {
        return {
          memberId: value,
          name: value,
        };
      });
      await new HousesApi().addHouseMembers(this.props.houseId, values);
      window.location.reload();
    };
    addMembers();
  }

  removeMember(obj) {
    const removeMember = async () => {
      await new HousesApi().removeHouseMember(this.props.houseId, obj);
      window.location.reload();
    };
    removeMember();
  }
  
  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <Card
              header={'Members'}
            >
              <CardList
                iterationFunction={() => {
                  return this.state.data.map((member) => {
                    return <CardListEntry key={member.memberId}>
                      <RemoveableEntry
                        removeFunction={this.removeMember}
                        removeObj={member.memberId}
                        expandable
                        collapsedText={
                          <>
                            <h5>Documents</h5>
                            <ul>
                              <li>
                                <ContentBetween>
                                  <div>
                                    <FontAwesomeIcon
                                      className="mr-1"
                                      icon={faFile}
                                    />
                                    <a href="#">
                                      Thing.file
                                    </a>
                                  </div>
                                  <AlignMiddle>
                                    <FontAwesomeIcon
                                      className="mr-3"
                                      icon={faTimes}
                                    />
                                  </AlignMiddle>
                                </ContentBetween>
                              </li>
                              <li>
                                <ContentBetween>
                                  <div>
                                    <FontAwesomeIcon
                                      className="mr-1"
                                      icon={faFileAlt}
                                    />
                                    <a href="#">
                                      Thing.txt
                                    </a>
                                  </div>
                                  <AlignMiddle>
                                    <FontAwesomeIcon
                                      className="mr-3"
                                      icon={faTimes}
                                    />
                                  </AlignMiddle>
                                </ContentBetween>
                              </li>
                            </ul>

                            <Form className="my-2">
                              <Form.Group controlId="formFileInput">
                                <Form.File multiple></Form.File>
                              </Form.Group>
                            </Form>

                            <Button className="w-100" variant="primary">
                              Add files
                            </Button>
                          </>
                        }
                      >
                        {member.name}
                      </RemoveableEntry>
                    </CardListEntry>
                  })
                }}
              />
            </Card>

            <SelectCard
              creatable
              options={[]}
              placeholder={'Type member name'}
              submitText={'Add member'}
              submitFunction={this.onSubmit}
              pluralS
            />
          </>
        ) : ''}
      </>
    )
  }
}

export default MemberColumn;
