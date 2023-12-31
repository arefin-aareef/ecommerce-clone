import { termsSizeChange } from '@/lib/Constants';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';

type SizeChangeTermsProps = {};

const SizeChangeTerms: FC<SizeChangeTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>{termsSizeChange[0]}</SectionHeader>
			<Flex direction='column' gap={8}>
				{termsSizeChange.slice(1).map((item, index) => (
					<Text key={index}>{item}</Text>
				))}
			</Flex>
		</Flex>
	);
};

export default SizeChangeTerms;
