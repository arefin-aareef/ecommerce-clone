'use client';
import { Divider, Flex, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import NavItem from './NavItem';
import { navCategories } from '../util/data/NavbarData';
import CartIcon from './CartIcon';
import { CiSearch } from 'react-icons/ci';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const scrollThreshold = 85;
			if (scrollPosition > scrollThreshold) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Flex
			w='full'
			display={{ base: 'none', xl: 'flex' }}
			style={{ position: 'sticky', top: 0, zIndex: 10 }}
			bg='primaryWhite'
		>
			<Flex direction='column' w='full'>
				<Flex alignItems='center'>
					<Flex
						mx='auto'
						minW='1200px'
						justifyContent='space-between'
						py='16px'
					>
						{navCategories.map(item => (
							<NavItem variant='large' href='/'>
								{item.name}
							</NavItem>
						))}
					</Flex>

					{isScrolled && (
						<Flex px={3} gap={2}>
							<CiSearch size={24} />
							<Divider orientation='vertical' />
							<CartIcon />
						</Flex>
					)}
				</Flex>
				<Divider />
			</Flex>
		</Flex>
	);
};

export default Navbar;
