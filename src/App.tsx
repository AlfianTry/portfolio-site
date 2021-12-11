import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Link, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CareerModal from "./modal/CareerModal";
import MobileDevModal from "./modal/MobileDevModal";
import MobileScreenModal from "./modal/MobileScreenModal";
import SocmedModal from "./modal/SocmedModal";
import WebDevModal from "./modal/WebDevModal";

const Spritesheet = require("react-responsive-spritesheet").default;

function App() {
  const {
    isOpen: isCareerOpen,
    onOpen: onCareerOpen,
    onClose: onCareerClose,
  } = useDisclosure();
  const {
    isOpen: isWebDevOpen,
    onOpen: onWebDevOpen,
    onClose: onWebDevClose,
  } = useDisclosure();
  const {
    isOpen: isSocmedOpen,
    onOpen: onSocmedOpen,
    onClose: onSocmedClose,
  } = useDisclosure();
  const {
    isOpen: isMobileDevOpen,
    onOpen: onMobileDevOpen,
    onClose: onMobileDevClose,
  } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const {
    isOpen: isMobileScreenOpen,
    onOpen: onMobileScreenOpen,
    onClose: onMobileScreenClose,
  } = useDisclosure({
    defaultIsOpen: isMobile,
  });
  useEffect(() => {
    if (isMobile) {
      alert("For the best experience please use your computer browser.");
    }
  }, [isMobile]);
  return (
    <>
      <Box
        height="100vh"
        backgroundImage={`url('${process.env.PUBLIC_URL}/images/background.svg')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        overflow={"hidden"}
      >
        <Box
          maxHeight={"20%"}
          maxWidth={"20%"}
          position={"absolute"}
          top={"15%"}
        >
          <Spritesheet
            className="spritesheet"
            image={`${process.env.PUBLIC_URL}/images/coffee.png`}
            widthFrame={600}
            heightFrame={600}
            steps={12}
            fps={10}
            autoplay={false}
            loop={true}
            onMouseEnter={(spritesheet: any) => {
              spritesheet.goToAndPlay(1);
            }}
            onMouseLeave={(spritesheet: any) => {
              spritesheet.goToAndPause(11);
            }}
            onClick={onSocmedOpen}
          />
        </Box>

        <Box
          maxHeight={"50%"}
          maxWidth={"50%"}
          position={"absolute"}
          left={"30%"}
          top={"2%"}
        >
          <Spritesheet
            className="spritesheet"
            image={`${process.env.PUBLIC_URL}/images/laptop.png`}
            widthFrame={1230}
            heightFrame={780}
            steps={17}
            fps={15}
            autoplay={false}
            loop={false}
            onMouseEnter={(spritesheet: any) => {
              spritesheet.goToAndPlay(1);
            }}
            onMouseLeave={(spritesheet: any) => {
              spritesheet.goToAndPause(1);
            }}
            onClick={onWebDevOpen}
          />
        </Box>

        <Box
          maxHeight={"20%"}
          maxWidth={"20%"}
          position={"absolute"}
          left={"5%"}
          top={"60%"}
        >
          <Spritesheet
            className="spritesheet"
            image={`${process.env.PUBLIC_URL}/images/phone.png`}
            widthFrame={700}
            heightFrame={600}
            steps={13}
            fps={15}
            autoplay={false}
            loop={false}
            onMouseEnter={(spritesheet: any) => {
              spritesheet.goToAndPlay(1);
            }}
            onMouseLeave={(spritesheet: any) => {
              spritesheet.goToAndPause(1);
            }}
            onClick={onMobileDevOpen}
          />
        </Box>
        <Box
          position={"absolute"}
          top={{ lg: "70%", sm: "25%" }}
          left={{ lg: "30%", sm: "35%" }}
          maxWidth={{ lg: "100%", sm: "30%" }}
        >
          <Text
            fontSize={{ lg: "2rem", md: "1rem", "2xl": "2.5rem" }}
            color="white"
            textAlign="center"
            fontWeight="600"
          >
            Hello, my name is Alfian Tryputranto.
          </Text>
          <Text
            fontSize={{ lg: "1.5rem", md: "0.75rem", "2xl": "2rem" }}
            color="white"
            textAlign="center"
            fontWeight="300"
          >
            I'm Frontend Developer living in
          </Text>
          <Text
            fontSize={{ lg: "1.5rem", md: "0.75rem", "2xl": "2rem" }}
            color="white"
            textAlign="center"
            fontWeight="300"
          >
            Yogyakarta, Indonesia.
          </Text>
          <Text
            fontSize={{ lg: "1.5rem", md: "0.75rem", "2xl": "2rem" }}
            color="white"
            textAlign="center"
            fontWeight="300"
          >
            Currently working as ReactJS Developer
          </Text>
          <Text
            fontSize={{ lg: "1.5rem", md: "0.75rem", "2xl": "2rem" }}
            color="white"
            textAlign="center"
            fontWeight="300"
          >
            at a startup named{" "}
            <Link href="https://bisabebas.com" isExternal>
              Bisabebas
            </Link>
            .
          </Text>
        </Box>

        <Box
          maxHeight={"25%"}
          maxWidth={"35%"}
          position={"absolute"}
          top={"45%"}
          left={"65%"}
        >
          <Spritesheet
            className="spritesheet"
            image={`${process.env.PUBLIC_URL}/images/book.png`}
            widthFrame={1000}
            heightFrame={700}
            steps={13}
            fps={20}
            autoplay={false}
            loop={false}
            onMouseEnter={(spritesheet: any) => {
              spritesheet.setDirection("forward");
              spritesheet.goToAndPlay(1);
            }}
            onMouseLeave={(spritesheet: any) => {
              spritesheet.setDirection("rewind");
              spritesheet.goToAndPlay(12);
            }}
            onClick={onCareerOpen}
          />
        </Box>
      </Box>
      <CareerModal isOpen={isCareerOpen} onClose={onCareerClose} />
      <WebDevModal isOpen={isWebDevOpen} onClose={onWebDevClose} />
      <SocmedModal isOpen={isSocmedOpen} onClose={onSocmedClose} />
      <MobileDevModal isOpen={isMobileDevOpen} onClose={onMobileDevClose} />
      {/* <MobileScreenModal
        isOpen={isMobileScreenOpen}
        onClose={onMobileScreenClose}
      /> */}
    </>
  );
}

export default App;
