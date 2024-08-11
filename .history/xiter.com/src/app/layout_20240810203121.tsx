// app/layout.tsx (already correctly placed)
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '@/app/themes/themes'; // Ensure this path is correct

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add any custom head elements here */}
      </head>
      <body>
        {/* Place ColorModeScript here */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
