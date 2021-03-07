import styled, { css } from "styled-components";

export default styled.img.attrs(props => ({
  height: props.height || '45px',
  width: props.width || '45px',
}))`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  border-radius: 50%;
  height: ${props => props.height};
  width: ${props => props.width};
`;
