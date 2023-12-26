import { Box } from '@chakra-ui/react';
import React from 'react';

const DropdownMenu = ({ children, isOpen }: {children:any, isOpen:any}) => {
	return (
		<Box style={{ display: isOpen ? 'block' : 'none' }}>
			{/* Your menu content goes here */}
			{children}
		</Box>
	);
};

export default DropdownMenu;
