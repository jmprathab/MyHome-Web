import React, { Component } from "react";
import styled from "styled-components";

import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import Link from "../../components/links/Link";
import styles from "../../styles";
import Input from "../../components/common/Input";
import InputBox from "./InputBox";
import { withRouter } from "react-router-dom";



class SignIn extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      email: '',
      password: '',
      errors: {
        email: false,
        password: false,
      },
    };
  }

  handleChange(event, id) {
    const value = event.target.value;
    this.setState({
      [id]: value,
      errors: this.getErrors([id], {
        [id]: value,
      }),
    });
  }

  getErrors(ids, values) {
    const errors = this.state.errors;
    for (var i = 0; i < ids.length; i++) {
      const id = ids[i];
      const value = values[id];
      errors[id] = false;
      if (!value.trim()) {
        errors[id] = false;
      }
      if (id === 'password' && !(value.length > 6)) {
        errors[id] = 'Password needs to have between x and y characters';
      }
      if (id === 'email' && !value.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/)) {
        errors[id] = 'Email adress is not valid';
      }
    }
    return errors;
  }

  validate() {
    const ids = [
      'email',
      'password',
    ];

    this.setState({
      errors: this.getErrors(ids, this.state),
    });
  }

  onButtonClick() {
    this.validate();

    if (Object.values(this.state.errors).every(error => error === false)) {
      this.props.history.push('/');
    }
  }

  focus(field) {
    document.getElementById(`${field}Field`).focus();
  }

  render() {
    return (
      <InputBox
        header="Login"
        buttonText="Login"
        onButtonClick={this.onButtonClick}
        inputFields={
          <>
            <Input
              id="emailField"
              onChange={(event) => this.handleChange(event, 'email')}
              enter={() => this.focus('password')}
              error={this.state.errors.email}
              label={
                <Text margin="0" type="paragraph">Email</Text>
              }
            />
            <Input
              id="passwordField"
              onChange={(event) => this.handleChange(event, 'password')}
              enter={this.onButtonClick}
              error={this.state.errors.password}
              type="password"
              label={
                <Text margin="0" type="paragraph">Password</Text>
              }
            />
          </>
        }
        footer={
          <>
            <Text type="paragraph" textAlign="center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Text>
            <Text type="paragraph" textAlign="center" bold>
              Forgot Password?
            </Text>
          </>
        }
      />
    )
  }
}

export default withRouter(SignIn);