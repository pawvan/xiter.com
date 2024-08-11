// app/auth/signin/page.tsx (or pages/auth/signin.tsx for older versions)
import React from 'react';
import { signIn } from 'next-auth/react';
import { Button, Box, Heading, Flex } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const SignIn = () => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Heading mb={4}>Sign In</Heading>
      <Button
        colorScheme="teal"
        leftIcon={<FaGithub />}
        onClick={() => signIn('github')}
      >
        Sign in with GitHub
      </Button>
    </Flex>
  );
};

export default SignIn;
