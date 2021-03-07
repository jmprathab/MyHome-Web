import React from "react";

import styled, { css } from "styled-components";
import { darken } from "polished";
import styles from "../../styles";


const Container = styled.div`
  display: flex;
  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  transition: background-color .5s;

  ${props => !props.disabled && css`
    cursor: pointer;

    &:hover {
      background-color: ${darken(0.2, styles.colors.grey)};
    }
    ${props => props.selected && css`
      background-color: ${styles.colors.blue};
      color: ${styles.colors.white};

      &:hover {
        background-color: ${darken(0.2, styles.colors.blue)};
      }
    `}
  `}
  ${props => props.disabled && css`
    color: ${darken(0.2, styles.colors.grey)};
  `}
  border-radius: 8px;


  width: 25px;
  height: 30px;
`;

export default function MultipleSelectClick(props) {
  return (
    <Container
      justifyContent={props.justifyContent ? props.justifyContent : false}
    >
      {props.options.map(option =>  
        <Option
          selected={option.selected ? true : false}
          disabled={option.disabled ? true : false}
          onClick={() => {
            if (!option.disabled) option.onClick();
          }}
        >
          {option.text}
        </Option>
      )}
    </Container>
  );
}
