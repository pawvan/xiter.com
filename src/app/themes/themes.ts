// app/themes/themes.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark', // or 'light'
  useSystemColorMode: false,
};

const theme = extendTheme({
  config: themeConfig,
  styles: {
    global: {
      body: { 
      },
    },
  },
  // Add other theme configurations here
});

export default theme;
