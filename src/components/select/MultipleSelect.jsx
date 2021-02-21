import { darken } from "polished";
import React from "react";
import styled, { css } from "styled-components";
import styles from "../../styles";
import Text from "../common/Text";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;

  & > * {
    padding: 5px;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-left: 2px solid ${styles.colors.grey};

      &:hover {
        border-left: 2px solid ${darken(0.2, styles.colors.grey)};
      }
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-right: 2px solid ${styles.colors.grey};

      &:hover {
        border-right: 2px solid ${darken(0.2, styles.colors.grey)};
      }
    }
    
    &:hover {
      background-color: ${darken(0.2, styles.colors.grey)};
      border-top: 2px solid ${darken(0.2, styles.colors.grey)};
      border-bottom: 2px solid ${darken(0.2, styles.colors.grey)};
      transition: background-color 1s, border 1s;
    }
  }
`;

const Option = styled.div`
  cursor: pointer;
  user-select: none;

  ${props => props.selected && css`
    background-color: ${props.selected};
    border-top: 2px solid ${props.selected};
    border-bottom: 2px solid ${props.selected};


    &:hover {
      background-color: ${darken(0.2, props.selected)};
      border-top: 2px solid ${darken(0.2, props.selected)};
      border-bottom: 2px solid ${darken(0.2, props.selected)};
    }

    &:first-child {
      border-left: 2px solid ${props.selected};
      
      &:hover {
        border-left: 2px solid ${darken(0.2, props.selected)};
      }
    }

    &:last-child {
      border-right: 2px solid ${props.selected};

      &:hover {
        border-right: 2px solid ${darken(0.2, props.selected)};
      }
    }
  `}

  ${props => !props.selected && css`
    border-top: 2px solid ${styles.colors.grey};
    border-bottom: 2px solid ${styles.colors.grey};
  `}
`;

export default function MultipleSelect(props) {
  return (
    <Container className={props.className}>
      {props.options.map(option => 
        <Option
          selected={props.selected === option.id ? styles.colors.blue : false}
          onClick={() => props.setSelected(option.id)}
        >
          <Text
            fontWeight="500"
            color={props.selected === option.id ? styles.colors.white : styles.colors.black}
          >
            {option.text}
          </Text>
        </Option>
      )}
    </Container>
  );
}