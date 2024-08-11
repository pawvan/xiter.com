import React from 'react';
import { Box, Flex, Heading, Text, Button, Center, Container } from '@chakra-ui/react';// Import your Navbar component

const LandingPage = () => {
  return (
    <Box>
      <Navbar /> {/* Ensure Navbar is correctly imported and positioned */}
      
      <Box bg="teal.800" color="white" minHeight="100vh" py={12}>
        <Container maxW="container.lg">
          <Flex direction="column" align="center" justify="center" textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Learn To Code
              <br />
              && Have Fun
              <br />
              Doing It
            </Heading>
            <Text fontSize="lg" mb={8>
              Build beautiful apps & websites with easy to follow tutorials
            </Text>
            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
