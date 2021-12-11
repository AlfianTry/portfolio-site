import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SocmedCard from "../components/SocmedCard";
import { socmedList } from "../data/data";
import IModalProps from "../interface/IModalProps";

export default function MobileScreenModal({ isOpen, onClose }: IModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            For the best appearance please use your PC Browser or activate
            'Dekstop site' mode.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
