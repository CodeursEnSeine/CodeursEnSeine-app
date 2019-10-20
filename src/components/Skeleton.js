import React from "react";
import { PseudoBox } from "@chakra-ui/core";

export const Skeleton = ({ style, ...props }) => (
  <PseudoBox className="skeleton-item" style={style} {...props} />
);
