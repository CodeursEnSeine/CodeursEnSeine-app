import React, { useEffect } from "react";
import { Layout } from "../components/templates/Layout";
import { sponsors } from "../components/Sponsors/sponsors.json";
import {
  Box,
  Badge,
  SimpleGrid,
  Image,
  Stack,
  Heading,
  AspectRatioBox,
  Icon
} from "@chakra-ui/core";
import { BASE_IMAGE } from "../components/Sponsors/SponsorsDisplay";
import { initScrollView } from "../helpers/backToTop";

const mapping = {
  gold: "yellow",
  silver: "gray",
  bronze: "orange",
  partner: "teal"
};

const Card = ({ sponsor }) => (
  <Box rounded="lg" borderWidth={1}>
    <AspectRatioBox ratio={16 / 9}>
      <Image
        src={`${BASE_IMAGE}/${sponsor.logo}`}
        alt={sponsor.name}
        borderBottomWidth={1}
        roundedTop="lg"
        objectFit="cover"
        padding={2}
      />
    </AspectRatioBox>
    <Box
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Heading
        mb={2}
        fontWeight="semibold"
        as="h4"
        size="md"
        textAlign="center"
      >
        {sponsor.name}
      </Heading>

      <Badge variantColor={mapping[sponsor.type]} px={2}>
        {sponsor.type}
      </Badge>
    </Box>
  </Box>
);

export const Sponsors = () => {
  useEffect(() => {
    initScrollView();
  }, []);

  return (
    <Layout>
      <Box
        borderWidth={1}
        rounded="lg"
        color="brand.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
        as="a"
        href="https://www.clever-cloud.com"
        target="_blank"
        rel="noopener noreferrer"
        my={4}
      >
        Application hébergé sur Clever Cloud
        <Icon ml={2} name="external-link" />
      </Box>
      <Stack spacing={8}>
        <SimpleGrid columns={{ xs: 1, md: 2 }} spacing={{ xs: 2, md: 8 }}>
          {sponsors
            .filter(sponsor => sponsor.type === "gold")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "silver")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "bronze")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "partner")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};
