// app/layout.tsx
'use client'; // Ensure this is at the top of the file

import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import theme from '@/app/THEMES/themes'; // Adjust path as needed
import Navbar from './components/NavBar'

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add any custom head elements here */}
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
