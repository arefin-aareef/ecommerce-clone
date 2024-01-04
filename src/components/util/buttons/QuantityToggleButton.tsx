import { Button, Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type QuantityToggleButtonProps = {
	children: ReactNode;
	customClick?: () => void;
};

const QuantityToggleButton: FC<QuantityToggleButtonProps> = ({
	children,
	customClick,
	...rest
}) => {
	return (
		<Button
			bg='transparent'
			border='1px'
			borderColor='productColorBorderColor'
			rounded='unset'
			fontSize='1.5rem'
			onClick={customClick}
			{...rest}
		>
			<Text px={0.5}>
				{children}
			</Text>
		</Button>
	);
};

export default QuantityToggleButton;
