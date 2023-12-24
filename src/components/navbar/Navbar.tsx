import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';

type NavbarProps = FlexProps & {};

const Navbar: FC<NavbarProps> = ({}) => {

  const menuItems = (
    <Flex>
      <NavItem href='/'>Sneaker Studio</NavItem>
      <NavItem href='/'>Brands</NavItem>
      <NavItem href='/'>Men</NavItem>
      <NavItem href='/'>Women</NavItem>
      <NavItem href='/'>Children</NavItem>
      <NavItem href='/'>Accessories</NavItem>
      <NavItem href='/'>Bata Club</NavItem>
      <NavItem href='/'>B-Mag</NavItem>
      <NavItem href='/'>Franchise</NavItem>
    </Flex>
  )


  return (
    <>
      {menuItems}
    </>
  );
};

export default Navbar;