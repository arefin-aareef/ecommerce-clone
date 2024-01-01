import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavbarTopRight from './NavbarTopRight';
import NavbarTopLeft from './NavbarTopLeft';

type NavbarTopProps = {};

const NavbarTop: FC<NavbarTopProps> = ({}) => {
	return (
		<Flex
			w='full'
			bgColor={{ base: 'white', xl: 'navBg' }}
			justifyContent='center'
			alignItems='center'
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
		</Flex>
	);
};

export default NavbarTop;
