import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { Card } from "../components/StoryCard";
import Header from "../components/header";
import { MotionBox } from "../components/motion";
import { companies, institutes } from "../data/data";
import IModalProps from "../interface/IModalProps";

export default function CareerModal({ isOpen, onClose }: IModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      size={"xl"}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent maxW={"64rem"}>
        <ModalHeader>My Story</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MotionBox>
            <Heading>
              <Flex alignItems="center">
                <Header mt={0} mb={0}>
                  Career
                </Header>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                />
              </MotionBox>
            ))}
          </VStack>
          <Heading>
            <Flex alignItems="center">
              <Header mt={0} mb={0}>
                Education
              </Header>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {institutes.map((institute, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                />
              </MotionBox>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
