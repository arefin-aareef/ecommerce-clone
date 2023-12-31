import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { termsDefinitionClaimShoes } from '@/lib/Constants';
import { PiDotOutlineFill } from 'react-icons/pi';

type ShoesClaimTermsProps = {};

const ShoesClaimTerms: FC<ShoesClaimTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<Text fontWeight={600}>{termsDefinitionClaimShoes[0]}</Text>
			<Flex gap={2} direction='column'>
				{termsDefinitionClaimShoes.slice(1).map(item => (
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

export default ShoesClaimTerms;
