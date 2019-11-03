import React from "react";
import {
  Heading,
  Stack,
  Box,
  AspectRatioBox,
  Grid,
  Image
} from "@chakra-ui/core";
import { sponsors } from "./sponsors.json";

export const BASE_IMAGE =
  "https://www.codeursenseine.com/images/edition2019/sponsors/";

export const SponsorsDisplay = () => {
  return (
    <>
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
            <Box
              as="a"
              href={sponsor.link}
              key={sponsor.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AspectRatioBox
                ratio={16 / 9}
                rounded="md"
                shadow="paper"
                overflow="hidden"
              >
                <Image
                  as="img"
                  src={`${BASE_IMAGE}/${sponsor.logo}`}
                  alt={sponsor.name}
                  objectFit="cover"
                  padding={1}
                />
              </AspectRatioBox>
            </Box>
          ))}
        </Grid>
      </Stack>
    </>
  );
};
