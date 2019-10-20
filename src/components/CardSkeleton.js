import React from "react";
import { Box, Stack } from "@chakra-ui/core";
import { Skeleton } from "./Skeleton";

export const CardSkeleton = () => (
  <Box position="relative">
    <Box
      as="div"
      d="block"
      boxShadow="paper"
      borderRadius="md"
      borderLeft="4px solid"
      borderColor="brand.900"
      backgroundColor="white"
      py="2"
      px="3"
      mb="4"
    >
      <Stack mb="1">
        <Skeleton height="1rem" width="20rem" />
        <Skeleton height="1rem" width="10rem" />
      </Stack>
      <Stack isInline>
        <Skeleton height="1rem" width="4rem" backgroundColor="brand.100" />
      </Stack>
      <Skeleton
        position="absolute"
        bottom="1"
        right="1"
        height="2rem"
        width="2rem"
        borderRadius="100%"
        isRound
        backgroundColor="grey.500"
      />
    </Box>
  </Box>
);
