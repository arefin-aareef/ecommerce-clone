import { termsShippingPolicy } from '@/lib/Constants';
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { PiDotOutlineFill } from 'react-icons/pi';

type ShippingPolicyTermsProps = {};

const ShippingPolicyTerms: FC<ShippingPolicyTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>{termsShippingPolicy[0]}</SectionHeader>
			<Flex gap={2} direction='column'>
				<Flex direction='column' gap={12}>
					<Text>{termsShippingPolicy[1]}</Text>
					<Text>{termsShippingPolicy[2]}</Text>
				</Flex>
				{termsShippingPolicy.slice(3).map((item, index) => (
					<Flex key={index} gap={1}>
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

export default ShippingPolicyTerms;
