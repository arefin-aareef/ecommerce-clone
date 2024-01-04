'use client';
import { Divider, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';
import { navCategories } from '../util/data/NavbarData';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<Flex w='full' display={{ base: 'none', xl: 'flex' }}>
			<Flex direction='column' w='full'>
				<Flex mx='auto' w='1200px' justifyContent='space-between' py='16px'>
					{navCategories.map(item => (
						<NavItem variant='large' href='/'>
							{item.name}
						</NavItem>
					))}
				</Flex>
				<Divider />
			</Flex>
		</Flex>
	);
};

export default Navbar;
