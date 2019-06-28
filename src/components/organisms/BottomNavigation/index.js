import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function BottomNavigation({ children, as: Element, ...props }) {
  return <Element {...props}>{children}</Element>;
}

BottomNavigation.propTypes = {
  as: PropTypes.string
};

BottomNavigation.defaultProps = {
  /** The default root element of the component */
  as: "nav"
};

export default styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 56px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-image: ${props => props.theme.bottomNavigation.backgroundImage};
  border-radius: ${props => props.theme.bottomNavigation.borderRadius};
`;
