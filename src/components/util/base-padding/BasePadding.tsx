'use client';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type BasePaddingProps = FlexProps & {
	children: React.ReactNode;
};

const BasePadding: FC<BasePaddingProps> = ({ children, ...props }) => {
	const style = {
		// w: 'full',
		// flex: 1,
		// flexDir: 'column',
		// pr: { base: '100px', lg: '0px' },
		// py: { base: '16px', lg: '24px' },
		// pl: { base: '16px', lg: '170px' },
	};

	return (
		<Flex sx={style} {...props} bgColor='blue'>
			{children}
		</Flex>
	);
};

export default BasePadding;
