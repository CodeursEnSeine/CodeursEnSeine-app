import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import BottomNavigationActionElement from "./BottomNavigationActionElement";
import Link from "../../atoms/Link";

const propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const defaultProps = {
  exact: false
};

function BottomNavigationAction({ className, exact, to, ...props }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        return (
          <Link to={to}>
            <BottomNavigationActionElement selected={!!match} {...props} />
          </Link>
        );
      }}
    />
  );
}

export default BottomNavigationAction;

BottomNavigationAction.propTypes = propTypes;
BottomNavigationAction.defaultProps = defaultProps;
