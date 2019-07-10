import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../../atoms/Icon";

const propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

const defaultProps = {
  as: "div"
};

function BottomNavigationActionElement({
  as: Element,
  icon,
  children,
  ...props
}) {
  return (
    <Element {...props}>
      <Icon>{icon}</Icon>
      <span>{children}</span>
    </Element>
  );
}

BottomNavigationActionElement.defaultProps = defaultProps;
BottomNavigationActionElement.propTypes = propTypes;

export default styled(BottomNavigationActionElement)`
  color: ${props =>
    props.selected
      ? props.theme.bottomNavigation.colorSelected
      : props.theme.bottomNavigation.color};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
