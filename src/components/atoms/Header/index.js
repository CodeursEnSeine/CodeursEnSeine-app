import styled from "styled-components";

export default styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.title};
  font-size: 24px;
  margin: ${props => props.theme.spacing}px;
  margin-bottom: ${props => props.theme.spacing * 2}px;
`;
