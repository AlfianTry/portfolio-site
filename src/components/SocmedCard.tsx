import {
  Box,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { IconType } from "react-icons";

interface SocmedCardProps {
  name: string;
  username: string;
  logo: IconType;
  link: string;
}

const SocmedCard: React.FC<SocmedCardProps> = ({
  name,
  username,
  logo,
  link,
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <motion.div layout>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        alignItems={"center"}
        _hover={{ shadow: "lg" }}
        onClick={link ? () => window.open(link) : () => {}}
      >
        <Box as={logo} width={33} height={33} />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <HStack>
              <Text
                as={link ? Link : Text}
                href={link}
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
                onClick={(e) => e.stopPropagation()}
                isExternal
              >
                {username}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default SocmedCard;
