import React from 'react';
import { Box, Flex, Heading, Text, Button, Container, Image, Card, CardBody, CardFooter, Divider } from '@chakra-ui/react';

const videoData = [
  {
    id: '69Tzh_0lHJ8',
    description: 'Introduction to Course 1',
  },
  {
    id: 'dQw4w9WgXcQ',
    description: 'Deep Dive into Course 2',
  },
  {
    id: '3JZ_D3ELw3E',
    description: 'Overview of Course 3',
  },
  {
    id: 'L_lK4gEXk58',
    description: 'Basics of Course 4',
  },
  {
    id: '6Vh8v8T9EoE',
    description: 'Advanced Concepts in Course 5',
  },
];

const CoursePage = () => {
  // Options for the YouTube player
  const videoOptions = {
    height: '200',
    width: '360',
    playerVars: {
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

        {/* Horizontal Cards Layout */}
        <Flex direction="row" wrap="wrap" justify="center" spacing={8}>
          {videoData.map((video, index) => (
            <Box key={index} p={4} flex="1 1 300px" m={2}>
              <Card maxW="md" p={4} boxShadow="md" borderWidth="1px" borderRadius="md">
                <CardBody>
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} // YouTube thumbnail URL
                    alt="YouTube Video Thumbnail"
                    borderRadius="md"
                    mb={4}
                  />
                  <Text fontSize="md" mb={4}>
                    {video.description}
                  </Text>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button colorScheme="teal" size="lg" width="full">
                    Free Button
                  </Button>
                </CardFooter>
              </Card>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default CoursePage;
