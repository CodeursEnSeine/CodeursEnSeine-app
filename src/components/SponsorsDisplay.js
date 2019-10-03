import React, { useEffect, useState } from "react";
import { Heading, Stack, Box, AspectRatioBox, Grid } from "@chakra-ui/core";
import Cache from "../services/pwa/Cache";

const BASE_IMAGE =
  "https://www.codeursenseine.com/images/edition2019/sponsors/";

export const SponsorsDisplay = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const getSponsors = async () => {
      const response = await fetch("/sponsors.json");
      const json = await response.json();

      const cache = await Cache.get();
      if (cache) {
        cache.put(new Request("/sponsors.json"), new Response(json));
      }

      setSponsors(json.sponsors);
    };

    getSponsors();
  }, []);

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
