import { Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductCardProps = {
	product: any;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<Flex direction='column' pb={12} gap={2}>
			<Image w='260px' h='224px' src={product.img} />
			<Text textAlign='center'>{product.brand}</Text>
			<Text h={12} textAlign='center'>{product.name}</Text>
			<Text textAlign='center'>★★★★★</Text>
			<Flex justifyContent='center' gap={2}>
				<Text as='s' color='previousPrice' fontWeight={600}>
					TK {product.previousPrice}
				</Text>
				<Text color='currentPrice' fontWeight={600}>
					TK {product.currentPrice}
				</Text>
			</Flex>
		</Flex>
	);
};

export default ProductCard;