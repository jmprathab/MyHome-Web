import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "./card.component";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

class SelectCard extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.callSubmitFunction = this.callSubmitFunction.bind(this);

    this.state = {
      selectedValues: null,
    };
  }

  handleChange(e) {
    this.setState({
      selectedValues: e ? e.map(e => e.value) : null,
    });
  }

  callSubmitFunction() {
    if (this.state.selectedValues) {
      this.props.submitFunction(this.state.selectedValues);
    }
  }

  render() {
    return (
      <Card
        text={
          this.props.creatable ? (
            <CreatableSelect
              closeMenuOnSelect={false}
              isMulti
              onChange={this.handleChange}
              placeholder={this.props.placeholder ? this.props.placeholder : 'Select...'}
              options={this.props.options}
            />
          ) : (
            <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={this.handleChange}
              placeholder={this.props.placeholder ? this.props.placeholder : 'Select...'}
              options={this.props.options}
            />
          )
        }
        textStyle={
          {color: 'black'}
        }
        body={
          <>
            <br />
            <Button
              onClick={this.callSubmitFunction}
            >
              {this.props.submitText}{this.props.pluralS && this.state.selectedValues ? (this.state.selectedValues.length > 1 ? 's' : '') : ''}
            </Button>
          </>
        }
      />
    )
  }
}

export default SelectCard;
