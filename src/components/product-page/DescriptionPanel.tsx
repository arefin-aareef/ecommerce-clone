import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type DescriptionPanelProps = {
	singleProduct: any;
};

const DescriptionPanel: FC<DescriptionPanelProps> = ({ singleProduct }) => {

	return (
		<Flex direction='column' gap={8}>
			<Text fontWeight='600'>PRODUCT DETAILS</Text>

			<Text>{Array(7).fill(singleProduct.description).join(' ')}</Text>

			<Flex direction='column'>
				<Text>FEATURES:</Text>
				<Text>- Type: {singleProduct.type}</Text>
				<Text>- Gender: {singleProduct.gender}</Text>
				<Text>- Upper Material: {singleProduct.material}</Text>
				<Text>- Color: {singleProduct.color[0]}</Text>
				<Text>- Sole: {singleProduct.sole}</Text>
			</Flex>

			<Text>
				STYLE TIPS: {Array(4).fill(singleProduct.description).join(' ')}
			</Text>
		</Flex>
	);
};

export default DescriptionPanel;