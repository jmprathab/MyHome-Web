import React from "react";
import { connect } from "react-redux";

import * as yup from "yup";

import Text from "../../components/common/Text";
import Link from "../../components/links/Link";
import Input from "../../components/forms/Input";
import InputBox from "./InputBox";
import { withRouter } from "react-router-dom";
import AccountsApi from "../../api/Accounts";
import { setCurrentUser } from "../../redux/user/user.actions";
import Form from "../../components/forms/Form";

function SignIn(props) {
  const signIn = (data) => {
    const responsePromise = new AccountsApi().loginUser(data.Email, data.Password);
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
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            userId: userId,
            token: userToken,
          })
        );
    
        props.setCurrentUser({
          userId: userId,
          token: userToken,
        });
      }).catch(error => console.error(error));
    props.history.push('/');
  }

  return (
    <InputBox
      header="Login"
      inputFields={
        <Form
          submitText="Login"
          onSubmit={signIn}
          fields={[
            <Input
              name="Email"
              autoComplete="email"
              schema={yup.string().email().required()}
            />,
            <Input
              name="Password"
              type="password"
              autoComplete="password"
              schema={yup.string().min(8).max(80).required()}
            />,
          ]}
        />
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
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
