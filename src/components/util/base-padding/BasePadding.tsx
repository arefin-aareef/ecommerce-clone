'use client';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type BasePaddingProps = FlexProps & {
	children: React.ReactNode;
};

const BasePadding: FC<BasePaddingProps> = ({ children, ...props }) => {
	const style = {};

	return (
		<Flex style={style} {...props}>
			{children}
		</Flex>
	);
};

export default BasePadding;
