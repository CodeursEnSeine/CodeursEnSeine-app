import React from "react";
import ReactDOM from "react-dom";
import Layout from "../components/templates/Layout";
import routes from "../routes";
import { Heading } from "@chakra-ui/core";

export const NotFound404 = () => {
  const topbarTitlePortal = document.getElementById("topbar-title");

  return (
    <Layout>
      {topbarTitlePortal &&
        ReactDOM.createPortal(
          <Heading as="h4" fontSize="md" mb="1">
            {routes.notFound.title}
          </Heading>,
          topbarTitlePortal
        )}
      404 Not Found
    </Layout>
  );
};
