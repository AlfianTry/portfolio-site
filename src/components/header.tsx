import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";
import { PropsWithChildren } from "react";

interface Props extends BoxProps {
  emoji?: string;
}

const Header = ({ children, emoji, ...props }: PropsWithChildren<Props>) => (
  <Box
    as="h1"
    mt={10}
    mb={6}
    fontSize="3xl"
    lineHeight="shorter"
    fontWeight="bold"
    {...props}
    textAlign="left"
  >
    <Text>{children}</Text>
    {emoji ? " " + emoji : ""}
  </Box>
);
export default Header;
