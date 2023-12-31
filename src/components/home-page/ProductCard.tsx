'use client';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { GoHeart } from 'react-icons/go';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useRouter } from 'next/navigation';
import ProductSelectButton from '../util/buttons/ProductSelectButton';

type ProductCardProps = {
	product?: any;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const router = useRouter();
	const handleProductClick = (productId: string) => {
		router.push(`/product/${productId}`);
	};

	return (
		<Flex
			w='full'
			direction='column'
			p={4}
			gap={2}
			border='1px solid transparent'
			borderRadius={4}
			onClick={() => handleProductClick(product.productId)}
			_hover={{
				border: '1px',
				borderColor: 'productCardBorderColor',
			}}
		>
			<Flex w='full' flex={1} position='relative'>
				<Box w='260px' h='224px'>
					<Image w='100%' h='auto' src={product.img} />
				</Box>
				<Flex position='absolute' right={2} top={2}>
					<GoHeart size={24} />
				</Flex>
				<Flex
					w='80px'
					px={2}
					py={1}
					position='absolute'
					top={20}
					left={16}
					bg='white'
					boxShadow='0 0 2px rgba(0, 0, 0, 0.5)'
					borderRadius='2px'
				>
					<Text textAlign='center'>QUICK VIEW</Text>
				</Flex>
			</Flex>

			<Flex justifyContent='center' gap={3}>
				{product.size &&
					product.size.map((item: number, index: number) => (
						<Text key={index}>{item}</Text>
					))}
			</Flex>

			<Text textAlign='center'>{product.brand}</Text>

			<Text noOfLines={2} h={12} textAlign='center'>
				{product.name}
			</Text>

			<Flex justifyContent='center'>
				<Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
			</Flex>

			<Flex justifyContent='center' gap={2}>
				<Text as='s' color='previousPrice' fontWeight={600}>
					TK {product.previousPrice}
				</Text>

				<Text color='currentPrice' fontWeight={600}>
					TK {product.currentPrice}
				</Text>
			</Flex>

			<ProductSelectButton variant='default'>Shop Now</ProductSelectButton>
			<Box
				h={6}
				w={6}
				bg={product.color[0]}
				rounded='full'
				mx='auto'
				border={product.color[0] === 'White' ? '1px solid grey' : 'none'}
			></Box>
		</Flex>
	);
};

export default ProductCard;
