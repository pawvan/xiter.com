// Import necessary components from Chakra UI and next/navigation
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';  // Corrected import

const CourseDetail = () => {
  const router = useRouter();
  
  // Extracting slug from the URL
  const { slug } = router.query;

  return (
    <Container>
      <Box>
        <Heading>Course Details</Heading>
        <Text>Course Slug: {slug}</Text>
        <Button onClick={() => router.push('/courses')}>Back to Courses</Button>
      </Box>
    </Container>
  );
};

export default CourseDetail;
