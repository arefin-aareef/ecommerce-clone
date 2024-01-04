import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type PromocodeSectionProps = {
	singleProduct: any;
};

const PromocodeSection: FC<PromocodeSectionProps> = ({ singleProduct }) => {
	return (
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
};

export default PromocodeSection;
