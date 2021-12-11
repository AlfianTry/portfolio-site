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
        backgroundImage={`url('${process.env.PUBLIC_URL}/images/background.svg')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        templateColumns="repeat(16, 1fr)"
        templateRows="repeat(16, 1fr)"
      >
        <GridItem height={300} width={300} rowStart={4} rowSpan={6} colSpan={4}>
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
          />
        </GridItem>

        <GridItem
          height={520}
          width={820}
          colStart={5}
          colSpan={11}
          rowStart={1}
          rowSpan={10}
          marginTop={4}
          marginLeft={16}
        >
          <Spritesheet
            className="spritesheet"
            image={`${process.env.PUBLIC_URL}/images/laptop.png`}
            widthFrame={820}
            heightFrame={520}
            steps={17}
            fps={20}
            autoplay={false}
            loop={false}
            onMouseEnter={(spritesheet: any) => {
              spritesheet.goToAndPlay(1);
            }}
            onMouseLeave={(spritesheet: any) => {
              spritesheet.goToAndPause(1);
            }}
          />
        </GridItem>

        <GridItem rowStart={14} colStart={5} colSpan={8} rowSpan={4}>
          <Flex height={100}>
            <Box alignSelf="end" width="100%">
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

        <GridItem
          height={350}
          width={500}
          colStart={12}
          colSpan={5}
          rowStart={8}
          rowSpan={8}
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
        </GridItem>
      </Grid>
      <CareerModal isOpen={isCareerOpen} onClose={onCareerClose} />
    </>
  );
}

export default App;
