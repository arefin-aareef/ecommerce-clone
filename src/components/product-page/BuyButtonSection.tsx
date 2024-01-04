import { Flex, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';
import ProductSelectButton from '../util/buttons/ProductSelectButton';
import { FaRegHeart } from 'react-icons/fa';

type BuyButtonSectionProps = {};

const BuyButtonSection: FC<BuyButtonSectionProps> = ({}) => {
	return (
		<Flex w='full' direction='column' gap={4}>
			<Grid templateColumns='6fr 1fr' w='full' gap={4}>
				<ProductSelectButton variant='default'>ADD TO CART</ProductSelectButton>
				<ProductSelectButton variant='outline'>
					<FaRegHeart />
				</ProductSelectButton>
			</Grid>
			<ProductSelectButton variant='outline'>BUY IT NOW</ProductSelectButton>
		</Flex>
	);
};

export default BuyButtonSection;
