import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
interface CourseDetailProps {
  params: {
    slug: string;
  };
}

const CourseDetail = ({ params }: CourseDetailProps) => {
  const { slug } = params;
  const router = useRouter();

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
