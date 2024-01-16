import { HStack, Image, } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

interface Props {
  onSearch: (search: string) => void;
}


export const NavBar = ({onSearch}:Props) => {
  return (
    // horizontal stack - charkra styling
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}
