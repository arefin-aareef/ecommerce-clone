import { tk } from '@/lib/Constants';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type PriceDetailsSectionProps = {
	singleProduct: any;
};

const PriceDetailsSection: FC<PriceDetailsSectionProps> = ({
	singleProduct,
}) => {
	const discount = Math.round(
		((singleProduct.previousPrice - singleProduct.currentPrice) /
			singleProduct.previousPrice) *
			100
	);

	return (
		<Flex gap={4} alignItems='center'>
			<Text as='s' fontSize='1.375rem' textColor='previousPrice'>
				{tk} {singleProduct.previousPrice.toFixed(2)}
			</Text>
			<Text textColor='currentPrice' fontSize='1.375rem'>
				{tk} {singleProduct.currentPrice.toFixed(2)}
			</Text>
			<Text
				bg='currentPrice'
				textColor='primaryWhite'
				px={1}
				py={0.5}
				fontSize='0.875rem'
			>
				-{discount}%
			</Text>
		</Flex>
	);
};

export default PriceDetailsSection;
