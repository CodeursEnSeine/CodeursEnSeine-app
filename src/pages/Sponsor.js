import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Heading,
  Badge,
  AspectRatioBox,
  Image,
  Text
} from "@chakra-ui/core";
import { sponsors } from "../components/Sponsors/sponsors.json";
import { SPONSORS_COLOR_MAP } from "./Sponsors.js";
import { BASE_IMAGE } from "../components/Sponsors/SponsorsDisplay.js";

export const Sponsor = () => {
  const { name } = useParams();

  // Get the sponsor data from the list.
  const sponsor = sponsors.find(sponsor => sponsor.name === name);

  return (
    <Stack spacing={2} mt={4}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading textAlign="center">{sponsor.name}</Heading>
        <Badge variantColor={SPONSORS_COLOR_MAP[sponsor.type]} px={2} my={2}>
          {sponsor.type}
        </Badge>
      </Box>
      <Box borderBottomWidth={1} borderBottomColor="brand.100" mx={4}>
        <AspectRatioBox ratio={16 / 9}>
          <Image
            src={`${BASE_IMAGE}/${sponsor.logo}`}
            alt={sponsor.name}
            objectFit="cover"
            padding={2}
          />
        </AspectRatioBox>
      </Box>
      {sponsor.desc && (
        <Text
          my={4}
          mx={8}
          textAlign="justify"
          dangerouslySetInnerHTML={{ __html: sponsor.desc }}
        />
      )}
    </Stack>
  );
};
