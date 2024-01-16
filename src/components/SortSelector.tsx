import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: relevance
          </MenuButton>
          <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Dated Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
          </MenuList>
        </Menu>
      );
}
