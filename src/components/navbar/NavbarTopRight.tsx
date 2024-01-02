import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Input,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import {
	MdClose,
	MdFavoriteBorder,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { TfiAngleDown } from 'react-icons/tfi';

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

				<Flex as='button' position='relative' ref={btnRef} onClick={onOpen}>
					<BsCart3 size={24} />
					<Text
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
					</Text>
				</Flex>

				<Drawer
					isOpen={isOpen}
					onClose={onClose}
					size='xs'
					placement='right'
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent position='relative'>
						<DrawerHeader>
							<DrawerCloseButton px={10} _hover={{ bg: 'transparent' }}>
								<Flex alignItems='center' gap={1}>
									<MdClose size={18} />
									<Text lineHeight={0} fontWeight='400' fontSize='0.875rem'>
										CLOSE
									</Text>
								</Flex>
							</DrawerCloseButton>
						</DrawerHeader>
						<DrawerBody>
							<Flex direction='column' gap={5}>
								<Text fontSize='0.875rem' fontWeight='600'>
									SHOPPING CART
								</Text>
								<Divider />
								<Text
									textColor='cartSidebarTextColor'
									fontSize='0.875rem'
									fontWeight='400'
									textAlign='center'
								>
									Your cart is currently empty
								</Text>
								<Button
									variant='outline'
									border='1px solid black'
									_hover={{ color: 'primaryWhite', bg: 'secondaryBlack' }}
								>
									CONTINUE SHOPPING
								</Button>
							</Flex>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
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
};

export default NavbarTopRight;
