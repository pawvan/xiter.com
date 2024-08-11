// app/layout.tsx
'use client'; // Ensure this is at the top of the file

import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import theme from '@/app/THEMES/themes'; 
import Navbar from './COMPONENTS/NavBar'

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        <SessionProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
          </ChakraProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
