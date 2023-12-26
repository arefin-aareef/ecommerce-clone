import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type FooterItemProps = {
	children: ReactNode;
	href?: string;
};

const FooterItem: FC<FooterItemProps> = ({ children, href, ...props }) => {


	return (
		<Flex>
			<Text
				as={Link}
				href={href ? href : '/'}
				cursor='pointer'
				fontSize='14px'
        borderBottom='1px solid transparent'
        py='4px'
				_hover={{
					borderBottom: '1px solid',
					transition: 'border-bottom 0.3s ease',
				}}
				{...props}
			>
				{children}
			</Text>
		</Flex>
	);
};

export default FooterItem;