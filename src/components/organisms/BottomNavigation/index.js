import React from "react";
import { Flex } from '@chakra-ui/core';

const propTypes = {};
const defaultProps = {};

const BottomNavigation = ({ children, as, ...props }) => {
  return <Flex
    as="nav"
    position="fixed"
    bottom="-1px"
    left="0"
    right="0"
    h="56px"
    backgroundColor="brand.700"
    {...props}
  >
    {children}
  </Flex>;
}

BottomNavigation.propTypes = propTypes;
BottomNavigation.defaultProps = defaultProps;

export default BottomNavigation;