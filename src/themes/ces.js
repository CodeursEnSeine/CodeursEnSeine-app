import { theme } from "@chakra-ui/core";

export const themeCES = {
  ...theme,
  shadows: {
    ...theme.shadows,
    paper: `
      rgba(32, 47, 71, 0.06) 0px 0.8125rem 0.4375rem -0.4375rem,
      rgba(32, 47, 71, 0.08) 0.625rem 0.25rem 0.4375rem -0.5rem,
      rgba(32, 47, 71, 0.08) -0.625rem 0.25rem 0.4375rem -0.5rem,
      rgba(32, 47, 71, 0.06) 0px 0.1875rem 0.375rem 0px,
      rgba(32, 47, 71, 0.04) 0px -0.25rem 0.5rem -0.125rem,
      rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem;
    `
  },
  colors: {
    ...theme.colors,
    brand: {
      100: "#dce5ff",
      200: "#aeceff",
      300: "#7ec0ff",
      400: "#4db2ff",
      500: "#21a3fe",
      600: "#0d8ae5",
      700: "#0066b3",
      800: "#004081",
      900: "#001c50",
      1000: "#000120"
    }
  }
};
