import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

//  using chakra to creat a dark mode theme 
// v* using this to access the propertys and set them to dark
const config: ThemeConfig = {
    initialColorMode: 'dark'
};
// storing this data as theme
const theme = extendTheme({ 
    config,
    colors: {
      gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111',
      }
    } 
});

export default theme;