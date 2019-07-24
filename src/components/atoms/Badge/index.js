import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "../Link";

const propTypes = {
  to: PropTypes.string,
  href: PropTypes.string
};

const defaultProps = {
  as: "div",
  to: "",
  href: ""
};

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const Badge = ({ as: Tag, children, href, to, ...props }) => {
  let content = children;

  if (to) {
    content = <Link to={to}>{children}</Link>;
  }

  if (href) {
    content = <A href={href}>{children}</A>;
  }

  return <Tag {...props}>{content}</Tag>;
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default styled(Badge)`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  background-image: ${props =>
    props.href ? props.theme.backgroundImageLinear : ""};
  border-radius: ${props => props.theme.borderRadius};
  display: inline-block;
  line-height: 1;
  margin-right: ${props => props.theme.spacing}px;
  padding: ${props => props.theme.spacing}px;
`;
