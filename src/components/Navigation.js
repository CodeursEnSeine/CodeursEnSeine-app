import React from "react";
import { useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/core";
import routes from "../routes";

const propTypes = {};
const defaultProps = {};

const Navigation = ({ children, as, ...props }) => {
  const { pathname } = useLocation();

  const routesWithNav = Object.values(routes)
    .filter(x => x.isTopLevel)
    .map(x => x.pathname);

  if (!routesWithNav.includes(pathname)) {
    return "";
  }

  return (
    <Flex as="nav" backgroundColor="brand.700" {...props}>
      {children}
    </Flex>
  );
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
