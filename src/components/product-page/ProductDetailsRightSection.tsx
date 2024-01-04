import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ProductInfoSection from './ProductInfoSection';
import PriceDetailsSection from './PriceDetailsSection';
import { conditionText } from '@/lib/Constants';
import SizeChartSection from './SizeChartSection';
import ColorInfoSection from './ColorInfoSection';
import PromocodeSection from './PromocodeSection';
import QuantitySection from './QuantitySection';
import BuyButtonSection from './BuyButtonSection';

type ProductDetailsRightSectionProps = {
	singleProduct: any;
};

const ProductDetailsRightSection: FC<ProductDetailsRightSectionProps> = ({
	singleProduct,
}) => {
	return (
		<Flex direction='column' px={2} gap={5}>
			<Text fontSize='1.25rem' fontWeight='600'>
				{singleProduct.name}
			</Text>
			<ProductInfoSection singleProduct={singleProduct} />
			<PriceDetailsSection singleProduct={singleProduct} />
			<Text fontSize='0.875em' fontWeight='600'>
				{conditionText}
			</Text>
			<Text pt={6} noOfLines={3} fontSize='0.875em'>
				{Array(5).fill(singleProduct.description).join('')}
			</Text>
			<SizeChartSection singleProduct={singleProduct} />
			<ColorInfoSection singleProduct={singleProduct} />
			<PromocodeSection singleProduct={singleProduct} />
			<QuantitySection singleProduct={singleProduct} />
			<BuyButtonSection />
		</Flex>
	);
};

export default ProductDetailsRightSection;
