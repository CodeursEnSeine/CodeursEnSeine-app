import React from "react";
import { Route } from "react-router-dom";
import BottomNavigationActionElement from "./BottomNavigationActionElement";
import Link from "../../atoms/Link";

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
