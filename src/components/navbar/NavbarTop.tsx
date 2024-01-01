import {
	Box,
	Button,
	Flex,
	IconButton,
	Image,
	Input,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { CiLocationOn, CiSearch, CiUser } from 'react-icons/ci';
import { MdFavoriteBorder, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { TfiAngleDown } from 'react-icons/tfi';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { navCategories } from '../data/NavbarData';

type NavbarTopProps = {};

const NavbarTop: FC<NavbarTopProps> = ({}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpen1,
		onOpen: onOpen1,
		onClose: onClose1,
	} = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);
	const btnRef1 = useRef<HTMLButtonElement>(null);
	// const btnRef = React.useRef();

	const leftPart = (
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
							{/* <Flex>
								<Drawer
									isOpen={isOpen1}
									placement='left'
									onClose={onClose1}
									finalFocusRef={btnRef1}
								>
									<DrawerOverlay />
								</Drawer>
							</Flex> */}
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

	const middlePart = (
		<Flex cursor='pointer'>
			<Image
				w={{ base: '108px', xl: '160px' }}
				src='/navbar/navLogo.png'
			></Image>
		</Flex>
	);

	const rightPart = (
		<Flex>
			{/* For Mobile */}
			<Flex display={{ base: 'flex', xl: 'none' }} gap={4} alignItems='center'>
				<Flex cursor='pointer'>
					<CiUser size={24} />
				</Flex>
				<Flex cursor='pointer' position='relative'>
					<BsCart3 size={24} />
					<Box
						position='absolute'
						bottom={2}
						left={2}
						bg='black'
						textColor='white'
						rounded='100%'
						w='full'
						textAlign='center'
					>
						0
					</Box>
				</Flex>
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
				<Flex cursor='pointer' position='relative'>
					<BsCart3 size={24} />
					<Box
						position='absolute'
						bottom={2}
						left={2}
						bg='black'
						textColor='white'
						rounded='100%'
						w='full'
						textAlign='center'
					>
						0
					</Box>
				</Flex>
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
				{leftPart}

				{middlePart}

				{rightPart}
			</Flex>
		</Flex>
	);
};

export default NavbarTop;
