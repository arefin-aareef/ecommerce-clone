import { Button } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ProductSelectButtonProps = {
	children: ReactNode;
	variant: 'default' | 'outline';
};

const ProductSelectButton: FC<ProductSelectButtonProps> = ({
	children,
	variant,
}) => {
	return (
		<>
			{variant === 'default' && (
				<Button w='full' bg='black' textColor='white' _hover={{ bg: 'red' }}>
					{children}
				</Button>
			)}

			{variant === 'outline' && (
				<Button
					w='full'
					border='1px'
					borderColor='secondaryBlack'
					bg='transparent'
					_hover={{ bg: 'black', textColor: 'white' }}
				>
					{children}
				</Button>
			)}
		</>
	);
};

export default ProductSelectButton;
