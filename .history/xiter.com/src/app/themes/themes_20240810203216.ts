// app/themes/themes.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'light', // or 'dark'
  useSystemColorMode: false,
};

const theme = extendTheme({
  config: themeConfig,
  // Add other theme configurations here
});

export default theme;
