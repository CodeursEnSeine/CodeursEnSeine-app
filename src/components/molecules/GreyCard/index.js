import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardTitle from "../../atoms/CardTitle";
import CardSubTitle from "../../atoms/CardSubTitle";
import CardFooter from "../../atoms/CardFooter";
import Badge from "../../atoms/Badge";

const propTypes = {
  as: PropTypes.string
};

const defaultProps = {
  as: "div"
};

const BadgeWithMargin = styled(Badge)`
  margin: ${props => props.theme.spacing / 2}px;
`;

function GreyCard({ as: Tag, conference, to, ...props }) {
  return (
    <Tag {...props}>
      <CardTitle>{conference.title}</CardTitle>
      <CardSubTitle>
        <span>{conference.abstract}</span>
      </CardSubTitle>
      <CardFooter>
        {conference.room ? (
          <BadgeWithMargin>Salle {conference.room}</BadgeWithMargin>
        ) : null}
      </CardFooter>
    </Tag>
  );
}

export default styled(GreyCard)`
  background-color: ${props => props.theme.greyCard.backgroundColor};
  border: ${props => props.theme.greyCard.border};
  border-radius: ${props => props.theme.card.borderRadius};
  margin-top: ${props => props.theme.spacing}px;
`;

GreyCard.propTypes = propTypes;
GreyCard.defaultProps = defaultProps;
