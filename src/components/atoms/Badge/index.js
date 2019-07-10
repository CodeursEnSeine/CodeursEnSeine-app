import styled from "styled-components";

export default styled.div`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius};
  display: inline-block;
  line-height: 1;
  margin: ${props => props.theme.spacing}px;
  padding: ${props => props.theme.spacing}px;
`;
