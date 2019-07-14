import styled from "styled-components";

export default styled.button`
  background-color: ${props =>
    props.isFavorite
      ? props.theme.colors.favorite
      : props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  width: ${props => props.theme.spacing * 7}px;
  height: ${props => props.theme.spacing * 7}px;
  border: none;
  border-radius: 100%;
  position: fixed;
  bottom: ${props => props.theme.spacing * 9}px;
  right: ${props => props.theme.spacing * 2}px;
  box-shadow: ${props =>
    props.isFavorite
      ? props.theme.favorite.boxShadow
      : props.theme.card.boxShadow};
`;
