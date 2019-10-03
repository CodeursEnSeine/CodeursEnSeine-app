import React, { useState } from "react";
import marked from "marked";
import {
  Box,
  Text,
  Stack,
  Heading,
  Button,
  AspectRatioBox,
  Flex
} from "@chakra-ui/core";
import { MdBrokenImage } from "react-icons/md";

const propTypes = {};

const defaultProps = {};

const SpeakerDisplay = ({ speaker }) => {
  const [showAvatar, setShowAvatar] = useState(true);

  return (
    <Box my="8">
      <Stack isInline spacing="4" mb="4">
        <AspectRatioBox
          ratio={1}
          width={100}
          backgroundColor="gray.100"
          rounded="md"
          shadow="paper"
          overflow="hidden"
        >
          <Flex align="center" justify="center">
            {!showAvatar && (
              <Box as={MdBrokenImage} size="30px" color="gray.300" />
            )}
            {showAvatar && (
              <Box
                as="img"
                src={speaker.photoURL}
                alt={speaker.displayName}
                onError={() => setShowAvatar(false)}
              />
            )}
          </Flex>
        </AspectRatioBox>
        )}
        <Box>
          <Box mb="2">
            <Heading as="h4" fontSize="md" mb="1">
              {speaker.displayName}
            </Heading>
            {speaker.company && (
              <Heading as="h5" fontSize="xs" color="gray.500">
                {speaker.company}
              </Heading>
            )}
          </Box>
          <Stack isInline>
            {speaker.twitter && (
              <Box>
                <Button
                  as="a"
                  href={`https://twitter.com/${speaker.twitter}`}
                  size="xs"
                >
                  Twitter
                </Button>
              </Box>
            )}
            {speaker.github && (
              <Box>
                <Button
                  as="a"
                  href={`https://github.com/${speaker.github}`}
                  size="xs"
                >
                  Github
                </Button>
              </Box>
            )}
          </Stack>
        </Box>
      </Stack>
      <Text dangerouslySetInnerHTML={{ __html: marked(speaker.bio || "") }} />
    </Box>
  );
};

export default SpeakerDisplay;

SpeakerDisplay.propTypes = propTypes;
SpeakerDisplay.defaultProps = defaultProps;
