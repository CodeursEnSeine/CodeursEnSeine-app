import React from "react";
import { Heading, Stack, Box, AspectRatioBox, Grid } from "@chakra-ui/core";
import { sponsors } from "./sponsors.json";

export const BASE_IMAGE =
  "https://www.codeursenseine.com/images/edition2019/sponsors/";

export const SponsorsDisplay = () => {
  return (
    <Stack>
      <Box>
        <Heading as="h6" size="md">
          {sponsors.length} Sponsors
        </Heading>
      </Box>
      <Grid
        gap={2}
        autoFlow="row dense"
        gridTemplateColumns={[
          "1fr 1fr",
          "1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr"
        ]}
      >
        {sponsors.map(sponsor => (
          <a href={sponsor.link} key={sponsor.name}>
            <AspectRatioBox
              ratio={16 / 9}
              rounded="md"
              shadow="paper"
              overflow="hidden"
            >
              <Box
                as="img"
                src={`${BASE_IMAGE}/${sponsor.logo}`}
                alt={sponsor.name}
              />
            </AspectRatioBox>
          </a>
        ))}
      </Grid>
    </Stack>
  );
};
