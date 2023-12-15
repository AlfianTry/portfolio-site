import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import placeholder from "../assets/images/placeholder.png";

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  alt?: string;
}

export const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, alt } = props;
  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.800")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            w={16}
            h={16}
            objectFit="cover"
            fallbackSrc={placeholder}
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3} align="left">
            <Heading fontSize="xl">
              {title}
            </Heading>
            <Heading fontSize="sm">
              {role}
            </Heading>
            <Stack
              spacing={1}
              mt={3}
              isInline
              alignItems="center"
              display={["none", "none", "flex", "flex"]}
            >
              {skills.map((skill) => (
                <Tag size="sm" padding="0 3px" key={skill}>
                  {skill}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Stack display={["none", "none", "flex", "flex"]}>
          <Text fontSize={14}>{period}</Text>
        </Stack>
      </Flex>
      <Stack
        spacing={1}
        mt={3}
        isInline
        alignItems="center"
        display={["flex", "flex", "none", "none"]}
      >
        {skills.map((skill) => (
          <Tag size="sm" padding="0 3px" key={skill}>
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
};
