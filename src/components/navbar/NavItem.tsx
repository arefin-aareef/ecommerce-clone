import { Flex, Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';
import DropdownMenu from './DropdownMenu';

type NavItemProps = TextProps & {
	children: ReactNode;
	href?: string;
	menuContent?: ReactNode;
};

const NavItem: FC<NavItemProps> = ({ children, href, menuContent, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Flex
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Text
				as={Link}
				href={href ? href : '/'}
				userSelect='none'
				cursor='pointer'
				fontWeight='600'
				fontSize='1rem'
				letterSpacing='2px'
				borderBottom='1px solid transparent'
				// onClick={() => dispatch(resetSidebar())}
				_hover={{ borderBottom: '1px', transition: 'border-bottom 1s ease' }}
				{...props}
			>
				{children}
			</Text>
			<DropdownMenu isOpen={isHovered}>{menuContent}</DropdownMenu>
		</Flex>
	);
};

export default NavItem;