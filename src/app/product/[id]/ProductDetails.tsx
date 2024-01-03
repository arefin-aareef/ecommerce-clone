import SizeChart from '@/components/size-chart/SizeChart';
import { sizeModal } from '@/lib/Constants';
import {
	Box,
	Button,
	Flex,
	Grid,
	Image,
	Text,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type ProductDetailsProps = {
	singleProduct: any;
};

const ProductDetails: FC<ProductDetailsProps> = ({ singleProduct }) => {
	const discount = Math.round(
		((singleProduct.previousPrice - singleProduct.currentPrice) /
			singleProduct.previousPrice) *
			100
	);

	const productInfo = (
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

	const priceDetails = (
		<Flex gap={4} alignItems='center'>
			<Text as='s' fontSize='1.375rem' textColor='previousPrice'>
				Tk {singleProduct.previousPrice.toFixed(2)}
			</Text>
			<Text textColor='currentPrice' fontSize='1.375rem'>
				Tk {singleProduct.currentPrice.toFixed(2)}
			</Text>
			<Text
				bg='currentPrice'
				textColor='primaryWhite'
				px={1}
				py={0.5}
				fontSize='0.875rem'
			>
				-{discount}%
			</Text>
		</Flex>
	);

	const colorInfo = (
		<Flex direction='column' gap={3}>
			<Flex gap={1}>
				<Text fontSize='0.875em' fontWeight='600'>
					Color
				</Text>
				<Text textColor='red'>*</Text>
			</Flex>
			<Box
				border={1}
				borderColor='productColorBorderColor'
				h={10}
				w={10}
				bg={singleProduct.color[0]}
				rounded='full'
			/>
		</Flex>
	);

	const promoCode = (
		<Flex direction='column' gap={3}>
			<Flex gap={1}>
				<Text fontSize='0.875em' fontWeight='600'>
					Promocode
				</Text>
				<Text textColor='red'>*</Text>
			</Flex>
			<Text border='1px' borderColor='productColorBorderColor' p={2}>
				{singleProduct.promoCode}
			</Text>
		</Flex>
	);

	const [quantity, setQuantity] = useState(1);

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	// const increaseQuantity = () => {
	// 	if (quantity < {singleProduct.Quantity}) {
	// 		setQuantity(quantity + 1);
	// 	}
	// };

	return (
		<Flex w='full' direction='column'>
			<Grid templateColumns='1fr 1fr' gap={12}>
				<Box>
					<Image w='100%' h='auto' src={singleProduct.img} />
				</Box>

				<Flex direction='column' px={2} gap={5}>
					<Text fontSize='1.25rem' fontWeight='600'>
						{singleProduct.name}
					</Text>

					{productInfo}

					{priceDetails}

					<Text fontSize='0.875em' fontWeight='600'>
						* Offer is valid only for batabd.com
					</Text>

					<Text pt={6} noOfLines={3} fontSize='0.875em'>
						{Array(5).fill(singleProduct.description).join('')}
					</Text>

					<SizeChart singleProduct={singleProduct} />

					{colorInfo}

					{promoCode}

					<Flex direction='column' gap={3}>
						<Text fontSize='0.875em' fontWeight='600'>
							Quantity:
						</Text>
						<Flex alignItems='center'>
							<Button
								bg='transparent'
								border='1px'
								borderColor='productColorBorderColor'
								rounded='unset'
								fontSize='24px'
								onClick={decreaseQuantity}
							>
								<Text px={0.5} pb={1}>
									-
								</Text>
							</Button>
							<Text border='1px' borderColor='productColorBorderColor' px={8} py='7px'>
								{quantity}
							</Text>
							<Button
								bg='transparent'
								border='1px'
								borderColor='productColorBorderColor'
								rounded='unset'
								fontSize='20px'
								// onClick={increaseQuantity}
							>
								<Text pb={1}>+</Text>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Grid>
		</Flex>
	);
};

export default ProductDetails;
