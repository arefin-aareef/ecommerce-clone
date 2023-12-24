import { Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type NavItemProps = TextProps & {
	children: ReactNode;
	href?: string;
};

const NavItem: FC<NavItemProps> = ({ children, href, ...props }) => {
	return (
		<Text
			as={Link}
			href={href ? href : '/'}
			userSelect='none'
			cursor='pointer'
			fontWeight='600'
			fontSize='14px'
			letterSpacing='2px'
			// onClick={() => dispatch(resetSidebar())}
			{...props}
		>
			{children}
		</Text>
	);
};

export default NavItem;