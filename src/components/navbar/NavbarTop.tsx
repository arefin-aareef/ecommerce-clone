import { Avatar, Badge, Box, Flex, IconButton, Image, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CiLocationOn, CiSearch, CiUser } from 'react-icons/ci';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaAngleDown, FaBars, FaWhatsapp } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { TfiAngleDown } from 'react-icons/tfi';

type NavbarTopProps = {};

const NavbarTop: FC<NavbarTopProps> = ({}) => {
	const leftPart = (
		<Flex alignItems='center'>
			{/* For Mobile */}
			<Flex display={{ base: 'flex', xl: 'none' }} gap='16px'>
				<Flex cursor='pointer'>
					<FaBars size={24} />
				</Flex>
				<Flex cursor='pointer'>
					<CiSearch size={24} />
				</Flex>
			</Flex>

			{/* For Desktop */}
			<Flex
				display={{ base: 'none', xl: 'flex' }}
				gap='6px'
				alignItems='center'
			>
				<Flex cursor='pointer' gap='6px'>
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
			<Flex
				display={{ base: 'flex', xl: 'none' }}
				gap='16px'
				alignItems='center'
			>
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
			<Flex
				display={{ base: 'none', xl: 'flex' }}
				alignItems='center'
				gap='16px'
			>
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
						py='4px'
						px='8px'
						maxW={120}
						variant='unstyled'
						placeholder='SEARCH'
					/>
					<Flex px='8px' cursor='pointer'>
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
      py={{base: '12px', xl: '24px'}}
		>
			<Flex 
			w='1280px' 
			justifyContent='space-between'>
				{leftPart}

				{middlePart}

				{rightPart}
			</Flex>
		</Flex>
	);
};

export default NavbarTop;
