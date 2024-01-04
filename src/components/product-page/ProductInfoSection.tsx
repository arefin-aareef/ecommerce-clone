import { Flex, Grid, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductInfoSectionProps = {
	singleProduct: any;
};

const ProductInfoSection: FC<ProductInfoSectionProps> = ({ singleProduct }) => {
	return (
		<Grid templateColumns='1fr 1fr' w='50%'>
			<Flex direction='column' gap={1}>
				<Text fontWeight='600'>Brand:</Text>
				<Text fontWeight='600'>Product Code:</Text>
				<Text fontWeight='600'>Availability:</Text>
			</Flex>
			<Flex direction='column' gap={1}>
				<Text>{singleProduct.brand}</Text>
				<Text>{singleProduct.productCode}</Text>
				<Text fontWeight='600'>{singleProduct.availability[0]}</Text>
			</Flex>
		</Grid>
	);
};

export default ProductInfoSection;
