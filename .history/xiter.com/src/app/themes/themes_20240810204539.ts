// app/themes/themes.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  styles: {
    global: {
      body: {
        bg: 'lightgray', // Change 'lightgray' to your desired color
      },
    },
  },
  initialColorMode: 'dark', // or 'dark'
  useSystemColorMode: false,
};

const theme = extendTheme({
  config: themeConfig,
  // Add other theme configurations here
});

export default theme;
