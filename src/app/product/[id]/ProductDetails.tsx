import { Flex, Grid, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductDetailsProps = {
	singleProduct: any;
};

const ProductDetails: FC<ProductDetailsProps> = ({ singleProduct }) => {
	return (
		<Flex w='full' direction='column'>
      <Grid templateColumns='1fr 1fr' gap={4}>
        <Flex bg='red'>image</Flex>
        <Flex bg='red'>image</Flex>

      </Grid>
			{/* <Text>Product ID: {singleProduct.productId}</Text>
			<Text>Name: {singleProduct.name}</Text> */}
		</Flex>
	);
};

export default ProductDetails;