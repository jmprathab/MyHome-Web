import styled, { css } from "styled-components";
import styles from "../../styles";

const PageFlex = styled.div`
  display: flex;
  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  }
`;

export default PageFlex;
