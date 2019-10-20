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

export default function Layout({ children }) {
  return (
    <Box p="4" mb="6rem">
      {children}
    </Box>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
