import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BottomNavigationAction from "../../molecules/BottomNavigationAction";

const propTypes = {
  as: PropTypes.string
};

const defaultProps = {
  /** The default root element of the component */
  as: "nav"
};

function BottomNavigation({ children, as: Element, ...props }) {
  return (
    <Element {...props}>
      <BottomNavigationAction to="/favorite" icon="favorite">
        Favoris
      </BottomNavigationAction>
      <BottomNavigationAction exact to="/" icon="today">
        Programme
      </BottomNavigationAction>
      <BottomNavigationAction to="/map" icon="location_on">
        Plan
      </BottomNavigationAction>
    </Element>
  );
}

BottomNavigation.propTypes = propTypes;
BottomNavigation.defaultProps = defaultProps;

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
