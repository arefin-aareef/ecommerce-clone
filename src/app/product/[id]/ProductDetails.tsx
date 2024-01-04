import ProductDetailsRightSection from '@/components/product-page/ProductDetailsRightSection';
import { Box, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

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
				<ProductDetailsRightSection singleProduct={singleProduct} />
			</Grid>
		</Flex>
	);
};

export default ProductDetails;