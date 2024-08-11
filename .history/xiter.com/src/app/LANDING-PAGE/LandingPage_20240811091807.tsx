import React from 'react';
import { Box, Flex, Heading, Text, Button, Container, VStack } from '@chakra-ui/react';
import YouTube from 'react-youtube'; // Import the YouTube component
const LandingPage = () => {
  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <Box>
      <Box color="white" minHeight="100vh" py={12}>
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" textAlign="center">
            <VStack spacing={8} align="flex-start" flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                Learn To Code
                <br />
                && Have Fun
                <br />
                Doing It
              </Heading>
              <Text fontSize="lg" mb={8}>
                Build beautiful apps & websites with easy to follow tutorials
              </Text>
              <Button colorScheme="teal" size="lg">
                Get Started
              </Button>
            </VStack>

            <Flex direction="column" flex={1} ml={{ base: 0, md: 12 }}>
              <Box mb={8}>
                <YouTube
                  videoId="69Tzh_0lHJ8" // The video ID extracted from the URL
                  opts={videoOptions}
                />
              </Box>
             
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
