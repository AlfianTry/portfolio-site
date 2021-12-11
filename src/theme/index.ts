import { extendTheme, theme as base } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px",
});

const theme = extendTheme({
  fonts: {
    heading: `Readex Pro, ${base.fonts?.heading}`,
    body: `Readex Pro, ${base.fonts?.body}`,
  },
  breakpoints,
});

export default theme;
