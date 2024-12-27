"use client"
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'

const CourseDetail = () => {
  const router = useRouter();
  
  // Destructure the slug from router.query safely
  const { slug } = router.query || {};

  // If slug is not available, return a loading state or an error message
  if (!slug) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Loading Course Details...
          </Heading>
          <Text fontSize="lg">
            Please wait while the course details are being fetched.
          </Text>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Course Detail for {slug}
        </Heading>
        <Text fontSize="lg" mb={6}>
          Here you can add detailed information about the course.
        </Text>
        <Button colorScheme="teal" size="lg" onClick={() => router.back()}>
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default CourseDetail;
