import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Link, useDisclosure } from "@chakra-ui/react";
import React from "react";
import CareerModal from "./modal/CareerModal";

const Spritesheet = require("react-responsive-spritesheet").default;

function App() {
  const {
    isOpen: isCareerOpen,
    onOpen: onCareerOpen,
    onClose: onCareerClose,
  } = useDisclosure();
  return (
    <>
      <Grid
        height="100vh"
        backgroundImage="url('/images/bg.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(6, 1fr)"
      >
        <GridItem height={300} width={300} rowStart={2} rowSpan={2}>
          <Spritesheet
            className="spritesheet"
            image={`/images/sprite_coffee.png`}
            widthFrame={600}
            heightFrame={600}
            steps={13}
            fps={20}
            autoplay={false}
            loop={true}
            onMouseEnter={(spritesheet: any) => {
              spritesheet.setDirection("forward");
              spritesheet.goToAndPlay(1);
            }}
            onMouseLeave={(spritesheet: any) => {
              spritesheet.goToAndPause(1);
            }}
            onClick={onCareerOpen}
          />
        </GridItem>
        <GridItem rowStart={5} colStart={2} colSpan={2} rowSpan={2}>
          <Flex>
            <Box alignSelf="end" height="35%" width="100%">
              <Text
                fontSize="2rem"
                color="white"
                textAlign="center"
                fontWeight="600"
              >
                Hello, my name is Alfian Tryputranto.
              </Text>
              <Text
                fontSize="1.5rem"
                color="white"
                textAlign="center"
                fontWeight="300"
              >
                I'm Frontend Developer living in
              </Text>
              <Text
                fontSize="1.5rem"
                color="white"
                textAlign="center"
                fontWeight="300"
              >
                Yogyakarta, Indonesia.
              </Text>
              <Text
                fontSize="1.5rem"
                color="white"
                textAlign="center"
                fontWeight="300"
              >
                Currently working as ReactJS Developer
              </Text>
              <Text
                fontSize="1.5rem"
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
          </Flex>
        </GridItem>
      </Grid>
      <CareerModal isOpen={isCareerOpen} onClose={onCareerClose} />
    </>
  );
}

export default App;
