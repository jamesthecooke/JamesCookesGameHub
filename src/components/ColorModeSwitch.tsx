import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

// created a component accessing chakra to toggle the light/dark theme
export const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}
