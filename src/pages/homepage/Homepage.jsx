import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import styles from "../../styles";

import community from "../../assets/homepage/community.png";
import workTogether from "../../assets/homepage/workTogether.png";
import contributors from "../../assets/homepage/contributors.png";

import Text from "../../components/common/Text";

const PageFlexMod = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 1;

  border-top: 1px solid ${styles.colors.purple};
  border-left: 1px solid ${styles.colors.purple};
  margin-top: -1px;
  margin-left: -1px;
  
  padding: 0 10px;

  text-align: center;
  align-items: center;

  font-size: 28px;
  color: ${styles.colors.purple};
`;

const ButtonLink = styled.a`
  width: fit-content;

  border: 2px solid ${styles.colors.purple};
  border-radius: 35px;

  font-size: 25px;
  text-decoration: none;

  padding: 15px 40px;
  margin: 20px 0;

  &:hover {
    background-color: ${darken(0.05, styles.variables.white)};
  }
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const HomePage = () => (
  <PageFlexMod>
    <Item>
      <span>
        Welcome to the <Text bold color="currentColor">MyHome</Text> Application
        <br />
        We help people manage their community
      </span>
      <span />
      <Image src={community} />
    </Item>
    <Item>
      <span>
        We love contributors
        <br />
        Want to contribute? Read the contributors guide
      </span>
      <ButtonLink href="#">
        Read Guide
      </ButtonLink>
      <Image src={workTogether} />
    </Item>
    <Item>
      <span>
        We are a group of people
        <br />
        from all around the globe
        <br />
        bound together by the <Text bold color="currentColor">♥</Text>
        <br />
        for building applications
      </span>
      <span />
      <Image src={contributors} />
    </Item>
  </PageFlexMod>
);

export default HomePage;
