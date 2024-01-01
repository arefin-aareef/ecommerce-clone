import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { MdFavoriteBorder, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { TfiAngleDown } from 'react-icons/tfi';

type NavbarTopRightProps = {

}

const NavbarTopRight: FC<NavbarTopRightProps> = ({}) => {

  return (
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
};

export default NavbarTopRight;