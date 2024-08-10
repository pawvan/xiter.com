// src/Chakra.tsx
import React from 'react';
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
  ColorModeManager,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface ChakraProps {
  cookies: string;
  children: React.ReactNode;
}

export function Chakra({ cookies, children }: ChakraProps) {
  // Determine the color mode manager based on cookies
  const colorModeManager: ColorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

// Export a reusable function for getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '', // Provide default value if cookies are not available
    },
  };
};
