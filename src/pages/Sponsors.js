import React from "react";
import { Layout } from "../components/templates/Layout";
import { sponsors } from "../components/Sponsors/sponsors.json";
import { Box, Badge, SimpleGrid, Image, Stack, Heading } from "@chakra-ui/core";
import { BASE_IMAGE } from "../components/Sponsors/SponsorsDisplay";

const mapping = {
  gold: "yellow",
  silver: "gray",
  bronze: "orange"
};

const Card = ({ sponsor }) => (
  <Box rounded="lg" borderWidth={1}>
    <Image
      src={`${BASE_IMAGE}/${sponsor.logo}`}
      alt={sponsor.name}
      margin="auto"
      borderBottomWidth={1}
      roundedTop="lg"
    />
    <Box
      py={6}
      px={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Badge variantColor={mapping[sponsor.type]} px={2}>
        {sponsor.type}
      </Badge>
      <Heading
        mt="1"
        fontWeight="semibold"
        as="h4"
        size="md"
        lineHeight="tight"
        isTruncated
      >
        {sponsor.name}
      </Heading>
    </Box>
  </Box>
);

export const Sponsors = () => {
  return (
    <Layout>
      <Stack spacing={8}>
        <SimpleGrid columns={{ xs: 1, md: 2 }} spacing={{ xs: 2, md: 8 }}>
          {sponsors
            .filter(sponsor => sponsor.type === "gold")
            .map(sponsor => (
              <Card sponsor={sponsor} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "silver")
            .map(sponsor => (
              <Card sponsor={sponsor} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "bronze")
            .map(sponsor => (
              <Card sponsor={sponsor} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "partner")
            .map(sponsor => (
              <Card sponsor={sponsor} />
            ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};
