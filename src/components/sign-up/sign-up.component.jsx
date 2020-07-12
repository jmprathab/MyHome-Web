import React from "react";
import CreateUserApi from "../../api/CreateUser";

class BootstrapSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      this.createUser(name, email, password);
      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  createUser = (name, email, password) => {
    let api = new CreateUserApi(name, email, password);
    let responsePromise = api.createUser();
    responsePromise
      .then((res) => {
        if (!res.ok) {
          alert("Cannot create account");
        } else {
          alert("Successfully created account");
        }
        return res.json();
      })
      .then((res) => console.log(res));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h3>I do not have an account</h3>
        <h6>Sign up with your email and password</h6>
        <form>
          <div className="form-group">
            <label htmlFor="createAccountInputName">Name</label>
            <input
              type="name"
              className="form-control"
              id="createAccountInputName"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="createAccountInputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="createAccountInputEmail"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="createAccountInputPassword">Password</label>
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
              id="createAccountInputPassword"
            />
          </div>
          <div className="form-group">
            <label htmlFor="createAccountInputConfirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="createAccountInputConfirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BootstrapSignUp;
