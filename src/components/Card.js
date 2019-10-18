import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Badge, Stack } from "@chakra-ui/core";
import FAV from "./FAV";

const propTypes = {};
const defaultProps = {};

const Card = ({ talk, to, ...props }) => {
  // Check if conference as a speakers key. If not, set speakers to null.
  const speakers = talk.speakers
    ? talk.speakers.map(speaker => speaker.displayName).join(" • ")
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
          {talk.title}
        </Heading>
        <Text fontSize="xs" color="gray.500" fontWeight="semibold" mb="1">
          {speakers}
        </Text>
        <Stack isInline>
          {!!talk.room && <Badge variantColor="brand">Salle {talk.room}</Badge>}
          {talk.state === "sponsors" && (
            <Badge variantColor="cyan">Sponsorisé</Badge>
          )}
        </Stack>
      </Box>
      {isTalk && (
        <FAV talk={talk} position="absolute" bottom="1" right="1" size="sm" />
      )}
    </Box>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
