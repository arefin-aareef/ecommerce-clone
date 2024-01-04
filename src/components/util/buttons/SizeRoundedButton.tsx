import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type SizeRoundedButtonProps = {
	singleProduct: any;
};

const SizeRoundedButton: FC<SizeRoundedButtonProps> = ({ singleProduct }) => {
	const [selectedSize, setSelectedSize] = useState(singleProduct.size[0]);

	const handleSizeSelect = (size: number) => {
		setSelectedSize(size);
	};

	return (
		<Flex gap={3}>
			{singleProduct.size.map((size: number) => (
				<Box
					key={size}
					bg={size === selectedSize ? 'black' : 'white'}
					textColor={size === selectedSize ? 'primaryWhite' : 'black'}
					borderWidth={size === selectedSize ? '1px' : '1px'}
					borderColor={
						size === selectedSize ? 'black' : 'productCardBorderColor'
					}
					h={10}
					w={10}
					rounded='full'
					cursor='pointer'
					onClick={() => handleSizeSelect(size)}
				>
					<Text textAlign='center' pt={2}>
						{size}
					</Text>
				</Box>
			))}
		</Flex>
	);
};

export default SizeRoundedButton;