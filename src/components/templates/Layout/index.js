import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../../atoms/Header";
import Loader from "../../atoms/Loader";

const StyledSection = styled.section`
  margin: 8px;
  margin-bottom: 56px;
`;

const propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

const defaultProps = {
  loading: false
};

export default function Layout({ children, title, loading }) {
  if (loading) {
    return (
      <React.Fragment>
        <Header>Loading...</Header>
        <Loader />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header>{title}</Header>
      <StyledSection>{children}</StyledSection>
    </React.Fragment>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
