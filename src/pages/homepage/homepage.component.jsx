import React from "react";
import styled from "styled-components";

import PageFlex from '../../components/pages/PageFlex';

import community from '../../assets/homepage/community.png';
import worktogether from '../../assets/homepage/worktogether.png';
import contributors from '../../assets/homepage/contributors.png';

import Section from './section.component';

const Bold = styled.span`
  font-weight: bold;
`;

const HomePage = () => (
  <PageFlex
    justifyContent="space-around"
  >
    <Section
      text={
        <span>
          Welcome to the <Bold>MyHome</Bold> Application
          <br />
          We help people manage their community
        </span>
      }
      image={<img src={community} alt="" />}
    />
    <Section
      text={
        <span>
          We love contributors
          <br />
          Want to contribute? Read the contributors guide
        </span>
      }
      button={<a href="">Read Guide</a>}
      image={<img src={worktogether} alt="" />}
    />
    <Section
      text={
        <span>
          We are a group of people
          <br />
          from all around the globe
          <br />
          bound together by the <Bold>♥</Bold>
          <br />
          for building applications
        </span>
      }
      image={<img src={contributors} alt="" />}
    />
  </PageFlex>
);

export default HomePage;
