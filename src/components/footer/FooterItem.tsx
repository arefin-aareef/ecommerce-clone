import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type FooterItemProps = {
	children: ReactNode;
	href?: string;
	variant?: 'info' | 'link';
};

const FooterItem: FC<FooterItemProps> = ({ children, href, variant, ...props }) => {
	return (
		<>
			{variant === 'link' && (
				<Flex>
					<Text
						as={Link}
						href={href ? href : '/'}
						cursor='pointer'
						fontSize='0.875rem'
						borderBottom='1px solid transparent'
						py={1}
						_hover={{
							borderBottom: '1px solid',
							transition: 'border-bottom 0.3s ease',
						}}
						{...props}
					>
						{children}
					</Text>
				</Flex>
			)}
			{variant === 'info' && (
				<Text fontSize='0.875rem' py={0.5} {...props}>
					{children}
				</Text>
			)}
		</>
	);
};

export default FooterItem;
