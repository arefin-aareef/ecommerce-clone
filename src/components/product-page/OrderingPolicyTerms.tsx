import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { termsOrderingPolicy } from '@/lib/Constants';
import { PiDotOutlineFill } from 'react-icons/pi';

type OrderingPolicyTermsProps = {};

const OrderingPolicyTerms: FC<OrderingPolicyTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>{termsOrderingPolicy[0]}</SectionHeader>
			<Flex gap={2} direction='column'>
				{termsOrderingPolicy.slice(1).map(item => (
					<Flex gap={1}>
						<Box pt={1.5}>
							<PiDotOutlineFill />
						</Box>
						<Text>{item}</Text>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};

export default OrderingPolicyTerms;
