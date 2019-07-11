import styled from "styled-components";

export default styled.h3`
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.title};
  font-size: 24px;
  margin: 0;
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;
