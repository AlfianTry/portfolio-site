import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import SocmedCard from "../components/SocmedCard";
import { socmedList } from "../data/data";
import IModalProps from "../interface/IModalProps";

export default function SocmedModal({ isOpen, onClose }: IModalProps) {
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
      <ModalContent>
        <ModalHeader>Contact Me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={2} spacing={2}>
            {socmedList.map((socmed, id) => (
              <Box>
                <SocmedCard
                  key={socmed.id}
                  name={socmed.name}
                  username={socmed.username}
                  logo={socmed.logo}
                  link={socmed.link}
                />
              </Box>
            ))}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
