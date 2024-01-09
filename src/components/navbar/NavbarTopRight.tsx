'use client';
import { Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { TfiAngleDown } from 'react-icons/tfi';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';

type NavbarTopRightProps = {};

const NavbarTopRight: FC<NavbarTopRightProps> = ({}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<Flex>
			{/* For Mobile */}
			<Flex display={{ base: 'flex', xl: 'none' }} gap={4} alignItems='center'>
				<Flex cursor='pointer'>
					<CiUser size={24} />
				</Flex>

				<Flex as='button' ref={btnRef} onClick={onOpen}>
					<CartIcon />
				</Flex>

				<CartDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
			</Flex>

			{/* For Desktop */}
			<Flex display={{ base: 'none', xl: 'flex' }} alignItems='center' gap={4}>
				<Flex alignItems='center' cursor='pointer'>
					<CiUser size={24} />
					<TfiAngleDown size={12} />
				</Flex>
				<Text>|</Text>
				<Flex cursor='pointer'>
					<MdFavoriteBorder size={24} />
				</Flex>
				<Flex cursor='pointer'>
					<FaWhatsapp size={24} />
				</Flex>

				<CartIcon />
				<Flex as='form' bg='white' alignItems='center'>
					<Input
						py={1}
						px={2}
						maxW={120}
						variant='unstyled'
						placeholder='SEARCH'
					/>
					<Flex px={2} cursor='pointer'>
						<CiSearch size={24} />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default NavbarTopRight;
