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

     <Box>
     <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size='lg'
      >
        <AlertDialogOverlay>
          <AlertDialogContent p={6}>
            {/* Close Button at the top right corner */}
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={onClose}
            />
          <Flex align={'center'} justify={'center'}> 
          <Heading color="white" size='xl' alignItems='center' >
            Login
           </Heading>
</Flex>
            <AlertDialogBody>
              {/* Description */}
             <Flex align={'center'}  di >
             <Box mb={4}>
                Create an account to access the full platform
              </Box>
              {/* GitHub login button */}
              <Button
                colorScheme="gray"
                width="100%"
                leftIcon={<Icon as={FaGithub} />}
                onClick={() => { /* Add your GitHub login logic here */ }}
              >
                Login with GitHub
              </Button>
             </Flex>
              
            </AlertDialogBody>
          </AlertDialogContent>
        
        </AlertDialogOverlay>
      </AlertDialog>
     </Box>
    </>
  );
};

export default Navbar;
