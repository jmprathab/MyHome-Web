import React from "react";
import Container from "react-bootstrap/Container";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

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
