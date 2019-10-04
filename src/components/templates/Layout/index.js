import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Spinner, Stack, IconButton } from "@chakra-ui/core";
import { MdArrowBack } from "react-icons/md";

const propTypes = {
  goBack: PropTypes.func,
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

const defaultProps = {
  goBack: null,
  loading: false
};

export default function Layout({ children, goBack, title, loading }) {
  return (
    <Box p="4" mb="100px">
      <Stack isInline alignItems="center">
        {goBack && <IconButton isRound icon={MdArrowBack} onClick={goBack} />}
        <Heading size="lg" mb="2">
          {title}
        </Heading>
      </Stack>

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
