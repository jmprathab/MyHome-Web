
import React from "react";
import { Link as ReactLink }  from "react-router-dom";

import styled, { css } from "styled-components";
import styles from "../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component = styled(ReactLink).attrs(props => ({
  color: props.color || styles.colors.purple,
}))`
  ${props => props.width && css`
    width: ${props.width};
  `}

  color: ${props => props.color};
  ${props => props.bold && css`
    font-weight: bold;
  `}
`;
const Icon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;

function Link(props) {
  return (
    <Component {...props}>
      {props.children}
      {props.icon && <Icon icon={props.icon} />}
    </Component>
  );
}

export default Link;
