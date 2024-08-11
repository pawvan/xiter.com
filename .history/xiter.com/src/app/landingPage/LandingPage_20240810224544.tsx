import React from 'react';
import { Box, Flex, Heading, Text, Button, Container, VStack, HStack, AspectRatio } from '@chakra-ui/react';
import { YouTube } from 'react-youtube'; // If using a library for YouTube integration

const LandingPage = () => {
  return (
    <Box>
      <Box bg="teal.800" color="white" minHeight="100vh" py={12}>
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
              <AspectRatio maxW="560px" ratio={16 / 9} mb={8}>
                <iframe
                  src="https://www.youtube.com/embed/your-video-id"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                />
              </AspectRatio>
              <Box p={4} bg="gray.800" borderRadius="md">
                <Heading size="md" mb={4}>Example Section</Heading>
                <Text>
                  This is an example section where you can describe your features or show examples.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
