import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import ShoesClaimTerms from './ShoesClaimTerms';
import NonFootwearClaimTerms from './NonFootwearClaimTerms';
import { termsDefinitionClaim } from '@/lib/Constants';

type DefinitionClaimTermsProps = {};

const DefinitionClaimTerms: FC<DefinitionClaimTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>{termsDefinitionClaim[0]}</SectionHeader>
			<Text>{termsDefinitionClaim[1]}</Text>
			<ShoesClaimTerms />
			<NonFootwearClaimTerms />
		</Flex>
	);
};

export default DefinitionClaimTerms;
