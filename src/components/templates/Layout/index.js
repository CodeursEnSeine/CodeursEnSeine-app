import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Box, Heading, Spinner, Stack, IconButton } from "@chakra-ui/core";
import { MdArrowBack } from "react-icons/md";

const propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

const defaultProps = {
  loading: false
};

export default function Layout({
  children,
  isGoBackEnable = false,
  title,
  loading
}) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Box p="4" mb="100px">
      <Stack isInline alignItems="center">
        {isGoBackEnable && (
          <IconButton isRound icon={MdArrowBack} onClick={goBack} />
        )}
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
