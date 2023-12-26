import { Flex, Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';

type NavItemProps = TextProps & {
	children: ReactNode;
	href?: string;
};

const NavItem: FC<NavItemProps> = ({ children, href, ...props }) => {
	return (
		<Flex>
			<Text
				as={Link}
				href={href ? href : '/'}
				userSelect='none'
				cursor='pointer'
				fontWeight='600'
				fontSize='1rem'
				letterSpacing='2px'
				borderBottom='1px solid transparent'
				_hover={{ borderBottom: '1px', transition: 'border-bottom 1s ease' }}
				{...props}
			>
				{children}
			</Text>
		</Flex>
	);
};

export default NavItem;