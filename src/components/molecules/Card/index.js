import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Badge } from "@chakra-ui/core";
import FAV from "../../atoms/FAV";

const propTypes = {};
const defaultProps = {};

const Card = ({ conference, to, ...props }) => {
  // Check if conference as a speakers key. If not, set speakers to null.
  const speakers = conference.speakers
    ? conference.speakers.map(speaker => speaker.displayName).join(" • ")
    : null;

  const isTalk = !!to;

  return (
    <Box position="relative">
      <Box
        as={to ? Link : "div"}
        to={to}
        d="block"
        boxShadow={isTalk ? "paper" : null}
        borderRadius="md"
        borderLeft={isTalk ? "4px solid" : null}
        borderColor={isTalk ? "brand.900" : "gray.300"}
        borderWidth={isTalk ? null : "1px"}
        backgroundColor={isTalk ? "white" : "gray.100"}
        py="2"
        px="3"
        mb="4"
        {...props}
      >
        <Heading as="h5" fontSize="md" fontWeight="semibold" mb="1">
          {conference.title}
        </Heading>
        <Text fontSize="xs" color="gray.500" fontWeight="semibold" mb="1">
          {speakers}
        </Text>
        {!!conference.room && (
          <Badge variantColor="brand">Salle {conference.room}</Badge>
        )}
      </Box>
      {isTalk && (
        <FAV
          talk={conference}
          position="absolute"
          bottom="1"
          right="1"
          size="sm"
        />
      )}
    </Box>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
