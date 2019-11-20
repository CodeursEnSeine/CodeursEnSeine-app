import React from "react";
import {
  Box,
  Stack,
  Image,
  Button,
} from "@chakra-ui/core";
import PlanImg from "../images/plan.jpg";

export const Plan = () => (
  <Stack spacing={2} mt={4}>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image
        src={PlanImg}
        alt="Plan des salles"
        objectFit="cover"
      />
    </Box>

    <Box padding={2}>
      <Button
        size="md"
        rel="noopener noreferrer"
        mt={2}
        as="a"
        href="/files/plan.pdf"
        display="flex"
        download="Plan des salles CES 2019"
      >
        Télécharger le plan
      </Button>
    </Box>
  </Stack>
);
