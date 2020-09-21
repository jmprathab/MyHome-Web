import styled, { css } from "styled-components";
import { darken } from "polished";
import styles from "../../styles";

export default styled.button`
  width: 100%;
  text-align: center;
  border-radius: 24px;
  font-weight: bold;
  color: ${styles.variables.white};
  border: none;
  padding: 15px 0;
  transition: background-color .5s;
  text-transform: uppercase;

  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  &:focus {
    outline: none;
  }

  ${props => props.color &&
    css`
      background-color: ${props.color};

      &:hover {
        background-color: ${darken(0.05, props.color)};
      }
    `
  }
`;