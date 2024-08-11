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
  useDisclosure // Ensure this import is correct
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
               Xiter.com<
          </Heading>
        </Box>
        <Flex>
          <NextLink href="/courses" passHref>
            <Link mr={4} fontSize="lg">Courses</Link> {/* Use `mr` for margin-right */}
          </NextLink>
          <Button colorScheme="red" size='lg' onClick={onOpen}>
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
          <p>

            lol
          </p>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Navbar;
