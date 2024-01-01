import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	IconButton,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { navCategories } from '../data/NavbarData';

type NavbarTopLeftProps = {};

const NavbarTopLeft: FC<NavbarTopLeftProps> = ({}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<Flex alignItems='center'>
			{/* For Mobile */}
			<Flex display={{ base: 'flex', xl: 'none' }} gap={4} alignItems='center'>
				<IconButton
					ref={btnRef}
					bg='transparent'
					onClick={onOpen}
					aria-label='menu'
					icon={<FaBars size={24} />}
					_hover={{ bg: 'transparent' }}
				/>

				<Drawer
					isOpen={isOpen}
					placement='left'
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />

					<DrawerContent position='relative'>
						<DrawerCloseButton
							position='absolute'
							color='white'
							rounded='unset'
							right={-8}
							top={0}
							bg='red'
						/>

						<DrawerBody>
							{navCategories.map(item => (
								<Flex
									as='button'
									w='full'
									borderBottom='1px solid grey'
									_hover={{ bg: 'sidebarHoverColor' }}
									alignItems='center'
									justifyContent='space-between'
								>
									<Text py={2} fontWeight={600}>
										{item.name}
									</Text>
									<MdOutlineKeyboardArrowRight />
								</Flex>
							))}
						</DrawerBody>
					</DrawerContent>
				</Drawer>

				<Flex cursor='pointer'>
					<CiSearch size={24} />
				</Flex>
			</Flex>

			{/* For Desktop */}
			<Flex
				display={{ base: 'none', xl: 'flex' }}
				gap={1.5}
				alignItems='center'
			>
				<Flex cursor='pointer' gap={1.5}>
					<CiLocationOn size={24} />
					<Text>FIND A STORE</Text>
				</Flex>
				<Text>|</Text>
				<Text cursor='pointer'>CUSTOMER CARE: 09666200300</Text>
			</Flex>
		</Flex>
	);
};

export default NavbarTopLeft;
