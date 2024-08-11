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
      <Container maxW="container.xl" py={8}>
        {/* Centered Course Text */}
        <Flex direction="column" align="center" justify="center" mb={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={2}>
            Course
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={6}>
            Checkout our free & paid courses below!
          </Text>
        </Flex>

        {/* Horizontal Cards Layout */}
        <Flex direction="row" wrap="wrap" justify="center" spacing={3}>
          {videoData.map((video, index) => (
            <Box key={index} p={2} flex="1 1 300px">
              <Card 
                maxW="md" 
                p={0} 
                boxShadow="md" 
                borderWidth="1px" 
                borderRadius="md" 
                bg="" // Match the web background color
              >
                <CardBody p={0}>
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} // YouTube thumbnail URL
                    alt="YouTube Video Thumbnail"
                    borderRadius="md"
                    objectFit="cover"
                    boxSize="100%"
                  />
                  <Text fontSize="md" mt={2} px={2}>
                    {video.description}
                  </Text>
                </CardBody>
                <Divider />
                <CardFooter p={2}>
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
