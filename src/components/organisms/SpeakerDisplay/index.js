import React, { useState } from "react";
import styled from "styled-components";
import Badge from "../../atoms/Badge";
import Paragraph from "../../atoms/Paragraph";
import Header from "../../atoms/Header";
import SubHeader from "../../atoms/SubHeader";

const propTypes = {};

const defaultProps = {};

const StyledBadge = styled(Badge)`
  margin: ${props => props.theme.spacing}px;
`;

const SpeakerDisplay = ({ speaker }) => {
  const [showAvatar, setShowAvatar] = useState(true);

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        {showAvatar && (
          <img
            width={100}
            src={speaker.photoURL}
            alt={speaker.displayName}
            onError={() => setShowAvatar(false)}
          />
        )}
        <div>
          <Header>{speaker.displayName}</Header>
          {speaker.company && <SubHeader>{speaker.company}</SubHeader>}
          {speaker.twitter && (
            <StyledBadge href={`https://twitter.com/${speaker.twitter}`}>
              Twitter
            </StyledBadge>
          )}
          {speaker.github && (
            <StyledBadge href={`https://github.com/${speaker.github}`}>
              Github
            </StyledBadge>
          )}
        </div>
      </div>
      <Paragraph>{speaker.bio}</Paragraph>
    </React.Fragment>
  );
};

export default SpeakerDisplay;

SpeakerDisplay.propTypes = propTypes;
SpeakerDisplay.defaultProps = defaultProps;