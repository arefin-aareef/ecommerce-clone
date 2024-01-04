import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ColorInfoSectionProps = {
	singleProduct: any;
};

const ColorInfoSection: FC<ColorInfoSectionProps> = ({ singleProduct }) => {
	return (
		<Flex direction='column' gap={3}>
			<Flex gap={1}>
				<Text fontSize='0.875em' fontWeight='600'>
					Color
				</Text>
				<Text textColor='red'>*</Text>
			</Flex>
			<Box
				border={1}
				borderColor='productColorBorderColor'
				h={10}
				w={10}
				bg={singleProduct.color[0]}
				rounded='full'
			/>
		</Flex>
	);
};

export default ColorInfoSection;
