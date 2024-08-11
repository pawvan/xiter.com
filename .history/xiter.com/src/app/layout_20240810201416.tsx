// app/layout.tsx

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '@/app/themes/themes'; // Adjust the path as needed
import { ReactNode } from 'react';

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
        {/* 👇 Here's the script for Color Mode */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
