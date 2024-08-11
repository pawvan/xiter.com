// app/components/Navbar.tsx
'use client'; // Ensure this is at the top of the file

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  CloseButton,
  Icon
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" ml={14} p={8}  color="white">
        <Box>
          <Heading size="lg" as="h4">
            <NextLink href="/" passHref>
              Xiter.com
            </NextLink>
          </Heading>
        </Box>
        <Flex align={'center'} m>
          <NextLink href="/courses" passHref>
            <Link mr={4} fontSize="lg">Courses</Link>
          </NextLink>
          <Button colorScheme="teal" size="lg" onClick={onOpen}>
            Login
          </Button>
        </Flex>
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            p={4}
            border="2px solid"
            borderRadius="xl"
            borderColor="blackAlpha.300"
            position="relative"
          >
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={onClose}
            />
            <Flex align={'center'} justify={'center'}>
              <Heading color="white" size='xl'>
                Login
              </Heading>
            </Flex>
            <AlertDialogBody>
              <Flex direction="column" align="center" mb={4}>
                <Box mb={4}>
                  Create an account to access the full platform
                </Box>
                <Button
                  colorScheme="teal"
                  width="100%"
                  leftIcon={<Icon as={FaGithub} />}
                  onClick={() => signIn('github')}
                >
                  Login with GitHub
                </Button>
              </Flex>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Navbar;
