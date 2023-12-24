import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {

  return (
		<Flex w='full'>
			<Flex mx='auto' w='1280px' justifyContent='space-between' py='16px'>
				<NavItem href='/' textColor='red'>SNEAKER STUDIO</NavItem>
				<NavItem href='/'>BRANDS</NavItem>
				<NavItem href='/'>MEN</NavItem>
				<NavItem href='/'>WOMEN</NavItem>
				<NavItem href='/'>CHILDREN</NavItem>
				<NavItem href='/'>ACCESSORIES</NavItem>
				<NavItem href='/'>BATA CLUB</NavItem>
				<NavItem href='/'>B-MAG</NavItem>
				<NavItem href='/'>FRANCHISE</NavItem>
			</Flex>
		</Flex>
	);
};

export default Navbar;