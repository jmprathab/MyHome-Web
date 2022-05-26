import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, Component } from 'react';
import styled, { css } from 'styled-components';
import styles from '../../styles';

const CSS = css`
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    (props.bold || props.fontWeight) &&
    css`
      font-weight: ${props.bold
        ? 'bold'
        : props.fontWeight
        ? props.fontWeight
        : ''};
    `}
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
  color: ${(props) => (props.color ? props.color : styles.colors.black)};

  ${(props) =>
    props.dropdown &&
    css`
      display: inline-block;

      .dropdownContent {
        display: none;
        position: absolute;
      }

      &[data-dropdownopen='true'] .dropdownContent {
        display: block;
      }
    `}

  ${(props) =>
    props.label &&
    css`
      padding: 3px 6px;
      border-radius: 16px;
    `}
`;

const Span = styled.span`
  ${CSS}
`;
const Paragraph = styled.p`
  ${CSS}
`;
const Header = styled.h1`
  ${CSS}
`;

const DropdownIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  cursor: pointer;

  path {
    transition: d 0.5s;
  }
`;
const DropdownContent = styled.div`
  ${(props) =>
    props.dropdownMargin &&
    css`
      margin: ${props.dropdownMargin};
    `}
`;

const Text = (props) => {
  const { type, dropdown, children } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // TODO: Figure out a better way to do this
  const Selected = (() => {
    if (type === 'paragraph') return Paragraph;
    if (type === 'header') return Header;
    return Span;
  })();

  return (
    <Selected {...props} data-dropdownopen={JSON.stringify(dropdownOpen)}>
      {children}
      {dropdown && (
        <>
          <DropdownIcon
            icon={dropdownOpen ? faChevronDown : faChevronRight}
            size="sm"
            onClick={toggleDropdown}
          />
          <DropdownContent {...props} className="dropdownContent">
            {dropdown}
          </DropdownContent>
        </>
      )}
    </Selected>
  );
};

export default Text;
