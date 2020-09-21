import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../components/common/Input";
import Text from "../../components/common/Text";
import Link from "../../components/links/Link";
import Button from "../../components/common/Button";
import styles from "../../styles";

const Box = styled.div`
  height: 100%;
  min-width: 200px;
  max-width: 400px;
  padding: 30px 20px;
  border-radius: 8px;
  background-color: ${styles.colors.white};
`;

const SurroundedText = styled(Text)`
  display: flex;

  ::before,
  ::after {
    content: "";
    flex: 1 1 auto;
    margin: 10px;
    border-bottom: 1px solid ${styles.colors.grey};
  }
`;

class InputBox extends Component {
  render() {
    return (
      <Box>
        <Text
          type="header"
          textAlign="center"
        >
          {this.props.header}
        </Text>
        {this.props.inputFields}
        <Button
          color={styles.colors.purple}
          onClick={this.props.onButtonClick}
        >
          {this.props.buttonText}
        </Button>
        <Text
          padding="20px 0 0 0"
          type="paragraph"
          fontSize="10px"
          textAlign="center"
        >
          By continuing you agree to accept our <br /> Privacy Policy &amp; Terms of Service
        </Text>
        <SurroundedText type="paragraph" textAlign="center" uppercase>
          Or
        </SurroundedText>
        {this.props.footer}
      </Box>
    )
  }
}

export default InputBox;
