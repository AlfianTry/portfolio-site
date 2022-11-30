import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import LazyImage from "./lazy-image";
import { getTagColor } from "../theme";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  link?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  link,
  technologies,
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen}>
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
        <LazyImage
          src={logo}
          size="sm"
          width={33}
          height={33}
          layout="fixed"
          rounded="md"
        />
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
                {title}
              </Text>
              <HStack spacing="1">
                {technologies.map((tech) => (
                  <Tag size="sm" colorScheme={getTagColor(tech)}>
                    {tech}
                  </Tag>
                ))}
              </HStack>
            </HStack>
            {!isOpen && (
              <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                {description}
              </Text>
            )}

            {isOpen && (
              <Text
                fontSize="sm"
                color={textColor}
                // noOfLines={{ base: isOpen ? 5 : 2 }}
              >
                {description}
              </Text>
            )}
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
