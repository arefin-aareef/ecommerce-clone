import {
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { MdClose } from 'react-icons/md';

type CartDrawerProps = {
	isOpen: boolean;
	onClose: any;
	btnRef: any;
};

const CartDrawer: FC<CartDrawerProps> = ({ isOpen, onClose, btnRef }) => {
	return (
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
	);
};

export default CartDrawer;
