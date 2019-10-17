import React from "react";
import { useLocation } from 'react-router-dom';
import { Flex } from "@chakra-ui/core";
import routes from "../../routes";

const propTypes = {};
const defaultProps = {};

const Navigation = ({ children, as, ...props }) => {
  const { pathname } = useLocation();

  const routesWithNav = Object.values(routes)
    .filter(x => x.withNavigation)
    .map(x => x.pathname);

  if (!routesWithNav.includes(pathname)) {
    return '';
  }

  return (
    <Flex
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
    </Flex>
  );
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
