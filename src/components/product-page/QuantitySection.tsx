import { Flex, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import QuantityToggleButton from '../util/buttons/QuantityToggleButton';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { tk } from '@/lib/Constants';

type QuantitySectionProps = {
	singleProduct: any;
};

const QuantitySection: FC<QuantitySectionProps> = ({ singleProduct }) => {
	const [quantity, setQuantity] = useState(1);
	const [subtotal, setSubtotal] = useState(singleProduct.currentPrice);

	useEffect(() => {
		setSubtotal(singleProduct.currentPrice * quantity);
	}, [quantity, singleProduct.currentPrice]);

	const stock = singleProduct.quantity;
	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	const increaseQuantity = () => {
		if (quantity < stock) {
			setQuantity(quantity + 1);
		}
	};
	return (
		<Flex direction='column' gap={3}>
			<Text fontSize='0.875em' fontWeight='600'>
				Quantity:
			</Text>
			<Flex alignItems='center'>
				<QuantityToggleButton customClick={decreaseQuantity}>
					<FaMinus size={12} />
				</QuantityToggleButton>
				<Text
					border='1px'
					borderColor='productColorBorderColor'
					px={8}
					py='7px'
				>
					{quantity}
				</Text>
				<QuantityToggleButton customClick={increaseQuantity}>
					<FaPlus size={12} />
				</QuantityToggleButton>
			</Flex>
			<Flex gap={2}>
				<Text>Subtotal:</Text>
				<Text fontWeight='600'>
					{tk} {subtotal.toFixed(2)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default QuantitySection;
