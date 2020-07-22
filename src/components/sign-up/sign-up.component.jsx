import React from "react";
import CreateUserApi from "../../api/CreateUser";

class BootstrapSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 0,  //status - 0 indicates component after its initialization (without any login attempts), 1 indicates error due to API call,2 indicates success,3 indicates error due to mismatch of password and confirmPassword fields
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({
         status: 3,
         email: "",
         name: "",
         password: "",
         confirmPassword: ""
      })
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
          this.setState({
            status: 1
          });
        } else {
          this.setState({
            status: 2
          });
        }
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((e) => {
        this.setState({
          status: 1
        })
      });
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
        <form onSubmit={(e) => this.handleSubmit(e, this.props.setCurrentUser)}>
          <div className="form-group">
            <label htmlFor="createAccountInputName">Name</label>
            <input
              name="name"
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
              name="email"
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
              name="password"
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
              name="confirmPassword"
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
          {this.state.status===1?<span style={{ color: 'red' }}>An error occurred!</span>:this.state.status===3?<span style={{ color: 'red' }}>Passwords don't match!</span>:this.state.status===2?<span style={{ color: 'green' }}>Signup successful!</span>:null}
        </form>
      </div>
    );
  }
}

export default BootstrapSignUp;
