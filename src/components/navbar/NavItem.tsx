import { Button, Flex, IconButton, Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';

type NavItemProps = TextProps & {
	children: ReactNode;
	href?: string;
	variant?: 'small' | 'large';
};

const NavItem: FC<NavItemProps> = ({ children, href, variant, ...props }) => {
	return (
		<>
			{variant === 'large' && (
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
			)}

			{variant === 'small' && (
				<Flex w='full'>
					<Button>{children}</Button>
				</Flex>
			)}
		</>
	);
};

export default NavItem;
