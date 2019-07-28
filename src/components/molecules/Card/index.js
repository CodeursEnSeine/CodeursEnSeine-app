import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardTitle from "../../atoms/CardTitle";
import CardSubTitle from "../../atoms/CardSubTitle";
import CardFooter from "../../atoms/CardFooter";
import Badge from "../../atoms/Badge";
import Link from "../../atoms/Link";
import Icon from "../../atoms/Icon";
import Favorite from "../../../services/Favorite";
import { FavoritesContext } from "../../../contexts/FavoritesContext";

const propTypes = {
  as: PropTypes.string
};

const defaultProps = {
  as: "div"
};

const DivIcon = styled(Icon)`
  margin: ${props => props.theme.spacing}px;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
`;

const FavoriteIcon = styled(DivIcon)`
  color: ${props => props.theme.colors.favorite};
`;

function Card({ as: Tag, conference, to, ...props }) {
  const favoritesContext = useContext(FavoritesContext);

  const speakers = conference.speakers
    .map(speaker => speaker.displayName)
    .join(" • ");

  let header = (
    <React.Fragment>
      <CardTitle>{conference.title}</CardTitle>
      <CardSubTitle>
        <span>{speakers}</span>
      </CardSubTitle>
    </React.Fragment>
  );

  if (to) {
    header = <Link to={to}>{header}</Link>;
  }

  const favorite = Favorite.isFavorite(conference.id);

  return (
    <Tag {...props}>
      {header}
      <CardFooter>
        <Badge>Salle {conference.room}</Badge>
        {favorite ? (
          <FavoriteIcon
            onClick={() => {
              favoritesContext.removeFavorite(conference.id);
            }}
          >
            favorite
          </FavoriteIcon>
        ) : (
          <DivIcon
            onClick={() => {
              favoritesContext.addFavorite(conference.id);
            }}
          >
            favorite_border
          </DivIcon>
        )}
      </CardFooter>
    </Tag>
  );
}

export default styled(Card)`
  box-shadow: ${props => props.theme.card.boxShadow};
  border-top: 4px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.card.borderRadius};
  margin-top: ${props => props.theme.spacing}px;
`;

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
