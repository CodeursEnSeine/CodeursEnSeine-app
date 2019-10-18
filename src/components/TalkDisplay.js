import React from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { Box, Text } from "@chakra-ui/core";

const propTypes = {
  talk: PropTypes.object.isRequired
};

const defaultProps = {};

const TalkDisplay = ({ talk }) => {
  return (
    <Box mb="4">
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
