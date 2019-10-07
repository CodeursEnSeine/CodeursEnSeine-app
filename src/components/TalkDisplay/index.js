import React from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { Box, Stack, Heading, Badge, Text } from "@chakra-ui/core";

const propTypes = {
  talk: PropTypes.object.isRequired
};

const defaultProps = {};

const TalkDisplay = ({ talk }) => {
  const typeAndHour = () => {
    if (talk.formats) {
      return `${talk.formats} - ${talk.hour}`;
    }

    return talk.hour;
  };

  return (
    <Box mb="4">
      <Box mb="4">
        <Heading as="h4" fontSize="md" mb="1">
          {typeAndHour()}
        </Heading>
        <Stack isInline>
          {!!talk.room && <Badge variantColor="brand">Salle {talk.room}</Badge>}
          {!!talk.level && <Badge>{talk.level}</Badge>}
          {talk.state === "sponsors" && (
            <Badge variantColor="cyan">Sponsorisé</Badge>
          )}
        </Stack>
      </Box>

      {talk.abstract && (
        <Text
          dangerouslySetInnerHTML={{ __html: marked(talk.abstract || "") }}
        />
      )}
    </Box>
  );
};

export default TalkDisplay;

TalkDisplay.defaultProps = defaultProps;
TalkDisplay.propTypes = propTypes;
