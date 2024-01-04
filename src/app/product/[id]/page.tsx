'use client';
import { newArrival } from '@/components/data/NewArrival';
import { Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FC } from 'react';
import ProductDetails from './ProductDetails';

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
	const id = params.id;

	let singleProduct: any = null;

	newArrival.forEach(category => {
		const foundProduct = category.product.find(item => item.productId === id);
		if (foundProduct) {
			singleProduct = foundProduct;
		}
	});

	return (
		<Flex w='full'>
			{singleProduct && <ProductDetails singleProduct={singleProduct} />}
		</Flex>
	);
};

export default ProductPage;
