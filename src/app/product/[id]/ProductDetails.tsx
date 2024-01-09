import ProductDetailsRightSection from '@/components/product-page/ProductDetailsRightSection';
import ProductDetailsTabSection from '@/components/product-page/ProductDetailsTabSection';
import { Box, Divider, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductDetailsProps = {
	singleProduct: any;
};

const ProductDetails: FC<ProductDetailsProps> = ({ singleProduct }) => {
	return (
		<Flex w='full' direction='column' gap={12}>
			<Grid templateColumns='1fr 1fr' gap={12}>
				<Box>
					<Image w='100%' h='auto' src={singleProduct.img} />
				</Box>
				<ProductDetailsRightSection singleProduct={singleProduct} />
			</Grid>
			<ProductDetailsTabSection singleProduct={singleProduct} />
			<Divider />
		</Flex>
	);
};

export default ProductDetails;