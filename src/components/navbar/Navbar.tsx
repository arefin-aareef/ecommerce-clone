import { Divider, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';
import { navCategories } from '../data/NavbarData';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<Flex w='full' display={{ base: 'none', xl: 'flex' }} pb={10}>
			<Flex direction='column' w='full'>
				<Flex mx='auto' w='1200px' justifyContent='space-between' py='16px'>
					{navCategories.map(item => (
						<NavItem href='/'>{item.name}</NavItem>
					))}
				</Flex>
				<Divider />
			</Flex>
		</Flex>
	);
};

export default Navbar;
