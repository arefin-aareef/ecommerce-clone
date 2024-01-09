import { termsDefinitionClaimNonFootwear } from '@/lib/Constants';
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PiDotOutlineFill } from 'react-icons/pi';

type NonFootwearClaimTermsProps = {};

const NonFootwearClaimTerms: FC<NonFootwearClaimTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<Text fontWeight={600}>{termsDefinitionClaimNonFootwear[0]}</Text>
			<Flex gap={2} direction='column'>
				{termsDefinitionClaimNonFootwear.slice(1).map(item => (
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

export default NonFootwearClaimTerms;
