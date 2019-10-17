import React from "react";
import PropTypes from "prop-types";
import { Heading, PseudoBox } from "@chakra-ui/core";

const propTypes = {
  children: PropTypes.node
};
const defaultProps = {
  children: ""
};

const Hour = ({ children }) => {
  return (
    <PseudoBox mt="6" mb="2" _first={{ mt: 4 }}>
      <Heading as="h4" fontSize="md">
        {children}
      </Heading>
    </PseudoBox>
  );
};

Hour.propTypes = propTypes;
Hour.defaultProps = defaultProps;

export default Hour;
