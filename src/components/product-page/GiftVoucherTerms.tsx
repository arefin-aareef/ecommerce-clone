import { termsGiftCards } from '@/lib/Constants';
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { PiDotOutlineFill } from 'react-icons/pi';

type GiftVoucherTermsProps = {};

const GiftVoucherTerms: FC<GiftVoucherTermsProps> = ({}) => {
	return (
		<Flex direction='column' gap={6}>
			<SectionHeader>
				Terms & Conditions for BataBd Gift Card/ Gift Vouchers
			</SectionHeader>
			<Flex gap={2} direction='column'>
				{termsGiftCards.map(item => (
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

export default GiftVoucherTerms;
