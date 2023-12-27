import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type BodyProps = FlexProps & {
	children: ReactNode;
};

const Body: FC<BodyProps> = ({ children, ...props }) => {
	return (
		<Flex w='full' {...props}>
			{children}
		</Flex>
	);
};

export default Body;
