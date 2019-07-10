import styled from "styled-components";

export default styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.title};
  font-size: 16px;
  font-weight: normal;
  margin: 4px 0px 0px 4px;
`;
