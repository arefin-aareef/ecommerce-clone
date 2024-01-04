import BuyButtonSection from '@/components/product-page/BuyButtonSection';
import ColorInfoSection from '@/components/product-page/ColorInfoSection';
import PriceDetailsSection from '@/components/product-page/PriceDetailsSection';
import ProductInfoSection from '@/components/product-page/ProductInfoSection';
import PromocodeSection from '@/components/product-page/PromocodeSection';
import QuantitySection from '@/components/product-page/QuantitySection';
import SizeChartSection from '@/components/product-page/SizeChartSection';
import ProductSelectButton from '@/components/util/buttons/ProductSelectButton';
import { conditionText } from '@/lib/Constants';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaRegHeart } from 'react-icons/fa';

type ProductDetailsProps = {
	singleProduct: any;
};

const ProductDetails: FC<ProductDetailsProps> = ({ singleProduct }) => {
	return (
		<Flex w='full' direction='column'>
			<Grid templateColumns='1fr 1fr' gap={12}>
				<Box>
					<Image w='100%' h='auto' src={singleProduct.img} />
				</Box>

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
			</Grid>
		</Flex>
	);
};

export default ProductDetails;
