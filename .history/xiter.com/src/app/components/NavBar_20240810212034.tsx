import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" ml={24} mt={34} color="white">
        <Box>
          <Heading size="lg" as="h4">
            <NextLink href="/" passHref>
              Xiter.com
            </NextLink>
          </Heading>
        </Box>
        <Flex>
          <NextLink href="/courses" passHref>
            <Link marginRight="4" fontSize="lg">Courses</Link>
          </NextLink>
          <Button colorScheme="teal" onClick={onOpen}>
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
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Login
            </AlertDialogHeader>

            <AlertDialogBody>
              This is where your login form or additional information would go.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={onClose} ml={3}>
                Login
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Navbar;
