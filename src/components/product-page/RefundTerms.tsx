import { termsRefund } from '@/lib/Constants';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';

type RefundTermsProps = {};

const RefundTerms: FC<RefundTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>Refund</SectionHeader>
			<Flex direction='column' gap={8}>
				{termsRefund.map((item, index) => (
					<Text key={index}>{item}</Text>
				))}
			</Flex>
		</Flex>
	);
};

export default RefundTerms;
