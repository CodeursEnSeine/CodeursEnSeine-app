import React from "react";
import PropTypes from "prop-types";
import TalkHeader from "../../atoms/TalkHeader";
import Badge from "../../atoms/Badge";
import Paragraph from "../../atoms/Paragraph";

const propTypes = {
  talk: PropTypes.object.isRequired
};

const defaultProps = {};

const TalkDisplay = ({ talk }) => {
  return (
    <React.Fragment>
      <TalkHeader>{talk.title}</TalkHeader>
      {talk.room && <Badge>Salle {talk.room}</Badge>}
      {talk.level && <Badge>{talk.level}</Badge>}
      {talk.category && <Badge>{talk.category}</Badge>}
      {talk.description && <Paragraph>{talk.description}</Paragraph>}
    </React.Fragment>
  );
};

export default TalkDisplay;

TalkDisplay.defaultProps = defaultProps;
TalkDisplay.propTypes = propTypes;
