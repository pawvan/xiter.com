// app/components/Navbar.tsx
import { Box, Flex, Heading, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" ml={24} mt={34}  color="white">
      <Box>
        <Heading size="lṅṅ" as={'h4'}>
          <NextLink href="/" passHref>
            Xiter.com
          </NextLink>
        </Heading>
      </Box>
      <Flex>
        <NextLink href="/courses" passHref>
          <Link marginRight="4" fontSize="lg">Courses</Link>
        </NextLink>
        <NextLink href="/login" passHref>
          <Button colorScheme="teal">Login</Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
