import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import InputBox from "./InputBox";
import Text from "../../components/common/Text";
import Link from "../../components/links/Link";
import Input from "../../components/common/Input";
import AccountsApi from "../../api/Accounts";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
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
        errors[id] = 'Field is required';
      }
      if ((id === 'confirmPassword' && value !== this.state.password) || (id === 'password' && value !== this.state.confirmPassword)) {
        errors['confirmPassword'] = 'Password don\'t match';
      }
      if (id === 'password' && !(value.length > 6)) {
        errors[id] = 'Password needs to have between 8 and 80 characters';
      }
  
      if (id === 'email' && !value.match(/^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/)) {
        errors[id] = 'Email address is not valid';
      }
    }
    return errors;
  }

  validate() {
    const ids = [
      'name',
      'email',
      'password',
      'confirmPassword',
    ];

    this.setState({
      errors: this.getErrors(ids, this.state),
    });
  }

  onButtonClick() {
    this.validate();
    
    if (Object.values(this.state.errors).every(error => error === false)) {
      const signUp = async () => {
        await new AccountsApi().createUser(this.state.name, this.state.email, this.state.password);
      };
      signUp();
      this.props.history.push('/login');
    }
  }

  focus(field) {
    document.getElementById(`${field}Field`).focus();
  }

  render() {
    return (
      <InputBox
        header="Sign Up"
        buttonText="Sign Up"
        onButtonClick={this.onButtonClick}
        inputFields={
          <>
            <Input
              id="nameField"
              onChange={(event) => this.handleChange(event, 'name')}
              enter={() => this.focus('email')}
              error={this.state.errors.name}
              label={
                <Text margin="0" type="paragraph">Full Name</Text>
              }
            />
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
              type="password"
              id="passwordField"
              onChange={(event) => this.handleChange(event, 'password')}
              enter={() => this.focus('confirmPassword')}
              error={this.state.errors.password}
              label={
                <Text margin="0" type="paragraph">Password</Text>
              }
            />
            <Input
              type="password"
              id="confirmPasswordField"
              onChange={(event) => this.handleChange(event, 'confirmPassword')}
              error={this.state.errors.confirmPassword}
              enter={this.validate}
              label={
                <Text margin="0" type="paragraph">Confirm Password</Text>
              }
            />
          </>
        }
        footer={
          <Text type="paragraph" textAlign="center">
            Already have an account? <Link to="/login">Log In</Link>
          </Text>
        }
      />
    )
  }
}

export default withRouter(SignUp);
