import React from "react";
import { withRouter } from "react-router-dom";

import * as yup from "yup";

import InputBox from "./InputBox";
import Text from "../../components/common/Text";
import Link from "../../components/links/Link";
import Input from "../../components/forms/Input";
import Form from "../../components/forms/Form";
import AccountsApi from "../../api/Accounts";

function SignUp(props) {
  const signUp = (data) => {
    const responsePromise = new AccountsApi().createUser(data.Name, data.Email, data.Password);
    responsePromise
      .then(() => props.history.push('/login'))
      .catch(error => console.error(error));
  };

  return (
    <InputBox
      header="Sign Up"
      inputFields={
        <Form
          submitText="Sign Up"
          onSubmit={signUp}
          fields={[
            <Input
              name="Name"
              autoComplete="username"
              schema={yup.string().required()}
            />,
            <Input
              name="Email"
              autoComplete="email"
              schema={yup.string().email().required()}
            />,
            <Input
              name="Password"
              type="password"
              autoComplete="new-password"
              schema={yup.string().min(8).max(80).required()}
            />,
            <Input
              name="Confirm Password"
              type="password"
              autoComplete="new-password"
              schema={yup.string().equals([yup.ref("Password")], "Confirm Password must be the same as Password").required()}
            />,
          ]}
        />
      }
      footer={
        <Text type="paragraph" textAlign="center">
          Already have an account? <Link to="/login">Log In</Link>
        </Text>
      }
    />
  );
}

export default withRouter(SignUp);
