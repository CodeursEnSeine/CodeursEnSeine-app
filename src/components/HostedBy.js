import React from "react";
import { Box } from "@chakra-ui/core";
import { MdLaunch } from "react-icons/md";

const propTypes = {};
const defaultProps = {};

export const HostedBy = () => {
  return (
    <Box
      as="a"
      href="https://www.clever-cloud.com"
      d="block"
      p="2"
      textAlign="center"
      backgroundColor="brand.900"
      fontSize="xs"
      color="brand.200"
    >
      Application herbergée par Clever Cloud{" "}
      <MdLaunch style={{ display: "inline" }} />
    </Box>
  );
};

HostedBy.propTypes = propTypes;
HostedBy.defaultProps = defaultProps;
