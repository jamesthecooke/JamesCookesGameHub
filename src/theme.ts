import { ThemeConfig, extendTheme } from "@chakra-ui/react";

//  using chakra to creat a dark mode theme 
// v* using this to access the propertys and set them to dark
const config: ThemeConfig = {
    initialColorMode: 'dark'
};
// storing this data as theme
const theme = extendTheme({ config });

export default theme;