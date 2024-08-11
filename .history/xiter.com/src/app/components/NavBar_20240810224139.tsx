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
  Icon,
  Center
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';

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
          <Center> {/* Center the content within the dialog */}
            <AlertDialogContent p={4} border="2px solid" borderColor="blackAlpha.300" borderRadius="xl">
              {/* Close Button at the top right corner */}
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={onClose}
              />
              <Flex direction="column" align="center" justify="center">
                <Heading color="white" size='xl' mb={4}>
                  Login
                </Heading>
                <AlertDialogBody>
                  {/* Description */}
                  <Box mb={4}>
                    Create an account to access the full platform
                  </Box>
                  {/* GitHub login button */}
                  <Button
                    colorScheme="teal"
                    width="100%"
                    leftIcon={<Icon as={FaGithub} />}
                    onClick={() => signIn('github')} // Ensure signIn function is imported
                  >
                    Login with GitHub
                  </Button>
                </AlertDialogBody>
              </Flex>
            </AlertDialogContent>
          </Center>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Navbar;
