import React from "react";
import Container from "react-bootstrap/Container";

import SignIn from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/signup.component";

const SignInAndSignUpPage = () => (
  <div>
    <Container>
      <div className="row mt-5">
        <div className="col-md-6">
          <SignIn />
        </div>
        <div className="col-md-6">
          <SignUp />
        </div>
      </div>
    </Container>
  </div>
);

export default SignInAndSignUpPage;
