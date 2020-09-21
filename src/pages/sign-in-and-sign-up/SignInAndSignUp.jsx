import React, { Component } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import background from "../../assets/sign-in-and-sign-up/background.jpg";
import styles from "../../styles";
import Text from "../../components/common/Text";

// TODO: This should be integrated into the PageFlex component
const PageFlexMod = styled.div`

  display: flex;
  flex-wrap: wrap;
  height: 100%;

  padding: 10px 20px;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.16), ${styles.variables.black}), url(${background});
  background-size: cover;
  background-repeat: repeat;
`;

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TextBox = styled(GeneralBox)`
  color: ${styles.variables.white};
  flex: 1 1 60%;
`;
const InputBox = styled(GeneralBox)`
  flex: 1 1 40%;
`;

const Underline = styled.span`
  border-bottom: 4px solid ${styles.colors.purple};
  padding-bottom: 10px;
`;

class SignInAndSignUpPage extends Component {
  render() {
    return (<>
      <PageFlexMod>
        <TextBox>
          <Text fontSize="52px" type="header" color={styles.colors.white}>
            <Underline>My</Underline>Home
          </Text>
          <Text padding="20px 0 0 0" fontSize="32px" color={styles.colors.white}>
            Manage your community with ease.
          </Text>
        </TextBox>
        <InputBox>
          {this.props.inputBox} 
        </InputBox>
      </PageFlexMod>
      {new Array(100).map(n => <p>{n}</p>)}
      </>
    )
  }
}
class thing extends Component {
  render() {
    return (
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
    )
  }
}

export default SignInAndSignUpPage;