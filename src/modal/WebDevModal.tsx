import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/header";
import { MotionBox } from "../components/motion";
import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../data/data";
import IModalProps from "../interface/IModalProps";

export default function WebDevModal({ isOpen, onClose }: IModalProps) {
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
        <ModalHeader>Frontend Web Projects</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={1} spacing={4} mt={5} w="100%" pb={8}>
            {projectsList.map((project, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.desc}
                  logo={project.logo}
                  link={project.link}
                  technologies={project.technologies}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
