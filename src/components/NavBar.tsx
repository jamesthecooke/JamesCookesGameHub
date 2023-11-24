import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'


export const NavBar = () => {
  return (
    // horizontal stack - charkra styling
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <text>NavBar</text>
    </HStack>
  )
}
