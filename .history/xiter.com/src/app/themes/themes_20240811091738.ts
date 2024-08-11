
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark', 
  useSystemColorMode: false,
};

const theme = extendTheme({
  config: themeConfig,
  styles: {
    global: {
      body: { 
        bg:'blackAlpha.300'
      },
    },
  },
  // Add other theme configurations here
});

export default theme;
