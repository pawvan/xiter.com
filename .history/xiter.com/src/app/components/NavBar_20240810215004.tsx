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
  useDisclosure,
  CloseButton
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
            Xiter.com
          </Heading>
        </Box>
        <Flex>
          <NextLink href="/courses" passHref>
            <Link mr={4} fontSize="lg">Courses</Link>
          </NextLink>
          <Button colorScheme="red" size="lg" onClick={onOpen}>
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
            {/* Close Button at the top right corner */}
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={onClose}
            />
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Login
            </AlertDialogHeader>

            <AlertDialogBody>
              {/* Description */}
              <Box mb={4}>
                Create an account to access the full platform
              </Box>
              {/* Add GitHub login button */}
              <Button colorScheme="blackAlpha" width="100%" mb={4}>
                Login with GitHub
              </Button>
            </AlertDialogBody>

            <AlertDialogFooter>
              {/* Cancel and Login Buttons */}
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
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
