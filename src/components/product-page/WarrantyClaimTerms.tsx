import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { Flex, Text } from '@chakra-ui/react';
import { termsWarrantyClaim } from '@/lib/Constants';

type WarrantyClaimTermsProps = {

}

const WarrantyClaimTerms: FC<WarrantyClaimTermsProps> = ({}) => {

  return (
		<Flex direction='column' gap={6}>
			<SectionHeader>Warranty Claim Issue</SectionHeader>
			<Flex direction='column' gap={8}>
				{termsWarrantyClaim.map((item, index) => (
					<Text
						key={index}
						fontWeight={index === 0 ? 600 : 'normal'}
						fontSize={index === 0 ? '1.25rem' : 'normal'}
					>
						{item}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};

export default WarrantyClaimTerms;