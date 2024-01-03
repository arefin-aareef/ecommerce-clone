'use client';
import { Center, Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavbarTopRight from './NavbarTopRight';
import NavbarTopLeft from './NavbarTopLeft';

type NavbarTopProps = {};

const NavbarTop: FC<NavbarTopProps> = ({}) => {
	return (
		<Center
			w='full'
			bgColor={{ base: 'white', xl: 'navBg' }}
			py={{ base: 3, xl: 7 }}
			px={{ base: 5, md: 20, xl: 5 }}
		>
			<Flex w='1280px' justifyContent='space-between'>
				<NavbarTopLeft />
				<Flex cursor='pointer'>
					<Image w={{ base: '108px', xl: '160px' }} src='/navbar/navLogo.png' />
				</Flex>
				<NavbarTopRight />
			</Flex>
		</Center>
	);
};

export default NavbarTop;
