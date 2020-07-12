import React, { Component } from "react";

class HeroText extends Component {
  render() {
    return (
      <div className="container text-center">
        <p className="h5 mt-5">
          Welcome to MyHome Web Application
          <br />
          This Application helps people manage their apartments
          <br />
          <a href="signin">Login</a> to continue
        </p>
      </div>
    );
  }
}

export default HeroText;
