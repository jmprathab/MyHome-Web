import styled, { css } from "styled-components";

export default styled.img`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  border-radius: 50%;
  height: 25px;
  width: 25px;
`;
