import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';

type DefinitionClaimTermsProps = {

}

const DefinitionClaimTerms: FC<DefinitionClaimTermsProps> = ({}) => {


  return (
		<Flex direction='column' gap={6}>
			<SectionHeader>DEFINITION OF CLAIM</SectionHeader>
		</Flex>
	);
};

export default DefinitionClaimTerms;