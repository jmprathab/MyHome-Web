import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import styles from "../../styles";

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid ${styles.colors.grey};
  padding: 15px 10px 5px 10px;
  padding: ${props => props.error ? '20px 10px 10px 10px' : '10px'};
  border-radius: 8px;
  margin-bottom: 20px;
  transition: padding 1s;
  
  &:hover {
    border: 1px solid ${darken(0.05, styles.colors.grey)};

    ${props => props.error && css`
      border: 1px solid ${darken(0.05, styles.colors.red)};
    `}
  }
  
  &:focus,
  &:focus:hover {
    border: 1px solid ${darken(0.1, styles.colors.grey)};

    ${props => props.error && css`
      border: 1px solid ${darken(0.1, styles.colors.red)};
    `}
  }

  ${props => props.error && css`
    animation: shake 0.5s;
    border: 1px solid ${styles.colors.red};
  `} 

  @keyframes shake {
    0% {
      transform: translate(20px);
    }
    20% {
      transform: translate(-20px);
    }
    40% {
      transform: translate(12px);
    }
    60% {
      transform: translate(-12px);
    }
    80% {
      transform: translate(8px);
    }
    100% {
      transform: translsate(0px);
    }
  }
`;

const Error = styled.span`
  color: ${styles.colors.red};
  position: absolute;
  padding-left: 10px;
  font-size: 12px;
`;

const Wrapper = styled.div`
  position: relative;
`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(event) {
    if (!this.props.enter) return;
    if (event.keyCode === 13 /* Enter */) {
      this.props.enter();
    }
  }

  render() {
    return (
      <Wrapper>
        {this.props.label}
        <Error>
          {this.props.error}
        </Error>
        <InputField
          {...this.props}
          onChange={this.props.onChange}
          onKeyDown={this.onKeyDown}
        />
      </Wrapper>
    )
  }
}

export default Input;
