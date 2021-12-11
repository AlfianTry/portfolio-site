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

export const getTagColor = (type: string) => {
  type = type.toLowerCase();
  if (type === "rails" || type === "ruby" || type === "java") {
    return "red";
  } else if (type === "reactjs" || type === "nextjs") {
    return "cyan";
  } else if (type === "javascript") {
    return "yellow";
  } else if (
    type === "typescript" ||
    type === "tailwindcss" ||
    type === "kotlin"
  ) {
    return "blue";
  } else if (type === "chakraui" || type === "css" || type === "materialui") {
    return "teal";
  } else if (type === "android ") {
    return "green";
  }
};

export default theme;
