'use client'
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
import React, { FC, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CiSearch, CiLocationOn } from 'react-icons/ci';
import SubcategoryDrawer from './SubcategoryDrawer'; 
import { navCategories } from '../data/NavbarData';

type NavbarTopProps = {};

const NavbarTop: FC<NavbarTopProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const openSubcategoryDrawer = (category: string) => {
    setSelectedCategory(category);
    onOpen();
  };

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

				{/* Main Categories Drawer */}
				<Drawer
					isOpen={isOpen}
					onClose={onClose}
					size='xs'
					placement='left'
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
							<Flex direction='column'>
								{navCategories.map(item => (
									<Flex
										key={item.id}
										as='button'
										w='full'
										borderBottom='1px solid grey'
										_hover={{ bg: 'sidebarHoverColor' }}
										alignItems='center'
										justifyContent='space-between'
										onClick={() => openSubcategoryDrawer(item.name)}
									>
										<Text py={2} fontWeight={600}>
											{item.name}
										</Text>
										<MdOutlineKeyboardArrowRight />
									</Flex>
								))}
							</Flex>
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

			{/* Subcategories Drawer */}
			{selectedCategory && (
				<SubcategoryDrawer
					isOpen={isOpen}
					onClose={onClose}
					title={selectedCategory}
					subcategories={
						navCategories.find(item => item.name === selectedCategory)
							?.categories || []
					}
				/>
			)}
		</Flex>
	);
};

export default NavbarTop;
