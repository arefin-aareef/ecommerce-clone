'use client';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type BasePaddingProps = FlexProps & {
	children: React.ReactNode;
};

const BasePadding: FC<BasePaddingProps> = ({ children, ...props }) => {
	const style = {
		w: 'full',
		py: { base: 4, lg: 12 },
		px: { base: 1, lg: 6 },
		// flex: 1,
		// flexDir: 'column',
		// pr: { base: '100px', lg: '0px' },
		// pl: { base: '16px', lg: '170px' },
	};

	return (
		<Flex sx={style} {...props}>
			{children}
		</Flex>
	);
};

export default BasePadding;
