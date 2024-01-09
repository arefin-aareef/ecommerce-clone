import { termsWarrantyPolicy } from '@/lib/Constants';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';

type WarrantyPolicyTermsProps = {};

const WarrantyPolicyTerms: FC<WarrantyPolicyTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>{termsWarrantyPolicy[0]}</SectionHeader>
			<Flex direction='column' gap={8}>
				{termsWarrantyPolicy.slice(1).map((item, index) => (
					<Text
						key={index}
						fontWeight={
							index === 1 || index === 2 || index === 3 || index === 4
								? 600
								: 'normal'
						}
						pb={index === 0 ? 12 : 0}
					>
						{item}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};

export default WarrantyPolicyTerms;
