import React from "react";

import styled, { css } from "styled-components";
import styles from "../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.padding && css`padding: ${props.padding};`}
  ${props => props.margin && css`margin: ${props.margin};`}

  ${props => !props.image && css`padding: 10px;`}
  border: 1px solid ${styles.colors.grey};
  border-radius: 8px;

  box-shadow: 5px 5px 10px -2px ${styles.colors.grey};
`;
const Header = styled.div`
  margin-bottom: 10px;
`;
const FooterLine = styled.div`
  display: flex;

  ::before {
    content: "";
    flex: 1 1 auto;
    margin: 10px 0;
    border-bottom: 1px solid ${styles.colors.grey};
  }
`;
const ImagePadding = styled.div`
  padding: 10px;
`;

function Bottom(props) {
  return (
    <>
      <Header>
        {props.header}
      </Header>
      {props.children}
      {props.footer && <FooterLine />}
      {props.footer}
    </>
  );
}

function Card(props) {
  return (
    <Container {...props}>
      {props.image}
      {props.image ? <ImagePadding>
        <Bottom {...props} />
      </ImagePadding> : <Bottom {...props} />}
    </Container>
  );
}

export default Card;
