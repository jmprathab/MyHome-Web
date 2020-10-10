
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { faBell, faCalendar, faCogs, faComment, faHome, faMoneyBill, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { lighten } from "polished";
import styles from "../../styles";
import Text from "../common/Text";

const CSS = css`
  padding: 10px 10px 10px 20px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  color: ${styles.colors.black};

  &.active {
    margin-right: 27px;
    border-left: 3px solid ${styles.colors.blue};
    color: ${styles.colors.blue};
    background-color: ${lighten(0.45, styles.colors.blue)};
  }
`;

const Link = styled(NavLink)`${CSS}`;
const NormalLink = styled.a`${CSS}`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Bar = styled.div`
  flex: 1 1 15%;
  padding: 20px 10px 20px 0;
  border-right: 3px solid ${styles.colors.grey};

  left: -100%;
  display: initial;
  z-index: 2;
  height: ${styles.variables.viewHeight};
  background-color: ${styles.colors.white};
  @media screen and (max-width: 200px) {
   display:none
  }
  @media screen and (max-width: 600px) {
    position: absolute;
    transition: left .5s;

    ${props => props.overlay && css`
      left: 0;
    `}
  }
`;

class Sidebar extends Component {
  getLinks() {
    return [
      {
        link: '/',
        icon: faHome,
        text: 'Home',
      },
      {
        link: '/notifications',
        icon: faBell,
        text: 'Notifications',
      },
      {
        link: '/bookamenity',
        icon: faCalendar,
        text: 'Book Amenity',
      },
      {
        link: '/payments',
        icon: faMoneyBill,
        text: 'Payments',
      },
      {
        link: '/settings',
        icon: faCogs,
        text: 'Settings',
      },
      {
        normal: true,
        link: 'https://example.org',
        icon: faQuestion,
        text: 'Help',
      },
      {
        normal: true,
        icon: faComment,
        link: 'https://github.com/',
        text: 'Feedback',
      },
    ];
  }

  render() {
    return (
      <>
        <Bar overlay={this.props.overlay}>
          <LinkList>
            {this.getLinks().map((link, index) => {
              let LinkComponent = Link;
              if (link.normal) {
                LinkComponent = NormalLink;
              }
              return <li key={index}>
                <LinkComponent exact activeClassName="active" to={link.link} href={link.link}>
                  <Icon icon={link.icon} />
                  <Text fontWeight="500" color="currentColor">
                    {link.text}
                  </Text>
                </LinkComponent>
              </li>
            })}
          </LinkList>
        </Bar>
      </>
    )
  }
}

export default Sidebar;
