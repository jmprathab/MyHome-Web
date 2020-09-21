import React, { Component } from "react";
import { darken } from "polished";
import styled, { css } from "styled-components";
import styles from "../../styles";

const SectionFlex = styled.div`
  height: ${styles.variables.height};
  width: 100%;

  color: ${styles.colors.purple};
  font-size: 28px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-around;


  &:not(:last-child) {
    border-right: 1px solid ${styles.colors.purple};
  }

  a {
    border: 2px solid ${styles.colors.purple};
    border-radius: 35px;

    font-size: 25px;
    text-decoration: none;

    padding: 15px 40px;

    &:hover {
      background-color: ${darken(0.05, styles.variables.white)};
    }
  }

  @media screen and (max-width: 1300px) {
    &:not(:last-child) {
      border-bottom: 1px solid ${styles.colors.purple};
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1110px) {
    flex: 0 0 100%;
    border-right: none;
  }

  @media screen and (min-width: 1110px) and (max-width: 1300px) {
    &:not(:last-child) {
      flex: 0 0 50%;

      &:not(:first-child) {
        border-right: none;
      }
    }
  }
    
  @media screen and (max-width: 600px) {
    height: 50vh;
    font-size: 12px;

    &:not(:last-child) {
      border-right: none;
    }

    img {
      margin-bottom: 10px;
      width: 70%;
    }

    a {
      font-size: 16px;
      border: 1px solid ${styles.colors.purple};
      padding: 7.5px 20px;
    }
  }
`;

class Section extends Component {
  render() {
    return (
      <SectionFlex>
        <div>
          {this.props.text}
        </div>
        <div>
          {this.props.button}
        </div>
        <div>
          {this.props.image}
        </div>
      </SectionFlex>
    )
  }
}

export default Section;