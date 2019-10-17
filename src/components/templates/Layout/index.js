import React from "react";
import PropTypes from "prop-types";
import { Box, Spinner } from "@chakra-ui/core";

const propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

const defaultProps = {
  loading: false
};

export default function Layout({
  children,
  loading
}) {
  return (
    <Box p="4" mb="6rem">
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="brand.200"
          color="brand.600"
          size="md"
        />
      )}
      {!loading && <Box>{children}</Box>}
    </Box>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
