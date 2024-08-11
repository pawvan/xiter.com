import React from 'react';
import { Box, Flex, Heading, Text, Button, Container, VStack, Image, Card, CardBody, CardFooter, Divider } from '@chakra-ui/react';
import YouTube from 'react-youtube'; // Import the YouTube component

const CoursePage = () => {
  // Options for the YouTube player
  const videoOptions = {
    height: '200',
    width: '360',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <Box>
      <Container maxW="container.xl" py={12}>
        {/* Centered Course Text */}
        <Flex direction="column" align="center" justify="center" mb={12}>
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Course
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={8}>
            Checkout our free & paid courses below!
          </Text>
        </Flex>

        {/* Card with YouTube Thumbnail and Description */}
        <Flex justify="center" mb={12}>
          <Card maxW="md" p={4} boxShadow="md" borderWidth="1px" borderRadius="md">
            <CardBody>
              <Image
                src="https://img.youtube.com/vi/69Tzh_0lHJ8/hqdefault.jpg" // YouTube thumbnail URL
                alt="YouTube Video Thumbnail"
                borderRadius="md"
                mb={4}
              />
              <Text fontSize="md" mb={4}>
                Description of the video goes here. Provide a brief overview of what the video covers and what users can expect to learn.
              </Text>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button colorScheme="teal" size="lg" width="full">
                Free Button
              </Button>
            </CardFooter>
          </Card>
        </Flex>

        {/* Additional Sections */}
        <Flex direction="column" align="center" mb={12}>
          <Heading as="h2" size="lg" mb={4}>
            Chapter 1
          </Heading>
          <Text fontSize="md" mb={8}>
            Brief overview or introduction to Chapter 1.
          </Text>
          
          <Heading as="h2" size="lg" mb={4}>
            Chapter 2
          </Heading>
          <Text fontSize="md" mb={8}>
            Brief overview or introduction to Chapter 2.
          </Text>

          <Heading as="h2" size="lg" mb={4}>
            Chapter 3
          </Heading>
          <Text fontSize="md" mb={8}>
            Brief overview or introduction to Chapter 3.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default CoursePage;
