import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/core';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {
  children: '',
};

const Hour = ({ children }) => {
  return (
    <Heading
      as="h4"
      fontSize="md"
      mt="6"
      mb="2"
    >
      {children}
    </Heading>
  );
};

Hour.propTypes = propTypes;
Hour.defaultProps = defaultProps;

export default Hour;
