import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardTitle from "../../atoms/CardTitle";
import CardSubTitle from "../../atoms/CardSubTitle";
import Badge from "../../atoms/Badge";
import Link from "../../atoms/Link";

const propTypes = {
  as: PropTypes.string
};

const defaultProps = {
  as: "div"
};

const Card = ({ as: Tag, conference, to, ...props }) => {
  const card = (
    <Tag {...props}>
      <CardTitle>{conference.title}</CardTitle>
      <CardSubTitle>{conference.speaker}</CardSubTitle>
      <Badge>Salle {conference.room}</Badge>
    </Tag>
  );

  if (to) {
    return <Link to={to}>{card}</Link>;
  }

  return card;
};

export default styled(Card)`
  box-shadow: ${props => props.theme.card.boxShadow};
  border-top: 4px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.card.borderRadius};
  margin-top: ${props => props.theme.spacing}px;
`;

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
