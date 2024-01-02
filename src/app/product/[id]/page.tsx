'use client'
import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

type ProductPageProps = {
	params: {
		id: string;
	};
};

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
	return (
    <Flex>
      Product ID: {params.id}
    </Flex>
  );
};

export default ProductPage;