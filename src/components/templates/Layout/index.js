import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Spinner } from "@chakra-ui/core";

const propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

const defaultProps = {
  loading: false
};

export default function Layout({ children, title, loading }) {
  return (
    <Box p="4" mb="100px">
      <Heading size="lg" mb="2">
        {title}
      </Heading>
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
