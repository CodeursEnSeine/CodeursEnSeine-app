import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export default styled.div`
  border: 16px solid ${props => props.theme.colors.secondary};
  border-radius: 50%;
  border-top: 16px solid ${props => props.theme.colors.accent};
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
  margin: auto;
`;
