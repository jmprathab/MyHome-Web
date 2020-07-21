import React from "react";
import LoginUserApi from "../../api/LoginUser";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { setCurrentUser } from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0,  //status - 0 indicates component after its initialization (without any login attempts), 1 indicates error,2 indicates success
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event, setCurrentUser) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      this.loginUser(email, password, setCurrentUser);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateUserState = (userToken, userId, setCurrentUser) => {
    // Persist user details to localStorage

    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        userId: userId,
        token: userToken,
      })
    );

    setCurrentUser({
      userId: userId,
      token: userToken,
    });

    this.setState({
      status: 2
    });
    setTimeout(() => {
      this.props.history.push("/");
    }, 2000);
  };

  loginUser = (email, password, setCurrentUser) => {
    let api = new LoginUserApi(email, password);
    let responsePromise = api.loginUser();

    responsePromise
      .then((res) => {
        console.log(res);
        return {
          userId: res.headers.userid,
          userToken: res.headers.token,
        };
      })
      .then(({ userId, userToken }) => {
        console.log(userId);
        console.log(userToken);
        this.updateUserState(userToken, userId, setCurrentUser);
      }).catch((e) => {
        this.setState({
          status: 1,
          email: "",
          password: ""
        });
      });

    // Now dispatch an action to update the state
  };

  render() {
    return (
      <div>
        <h3>I already have an account</h3>
        <h6>Sign in with your email and password</h6>
        <form onSubmit={(e) => this.handleSubmit(e, this.props.setCurrentUser)}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="inputPassword"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
          {this.state.status==1?<span style={{ color: 'red' }}>An error occurred!</span>:this.state.status==2?<span style={{ color: 'green' }}>Login successful! Redirecting.....</span>:null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
