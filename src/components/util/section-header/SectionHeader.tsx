import { Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type SectionHeaderProps = {
	children: ReactNode;
};

const SectionHeader: FC<SectionHeaderProps> = ({ children, ...props }) => {


  return (
		<Text fontSize='1.625rem' fontWeight={600}>
			{children}
		</Text>
	);
};

export default SectionHeader;