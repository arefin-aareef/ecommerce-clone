import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import InitialTerms from './InitialTerms';
import OrderingPolicyTerms from './OrderingPolicyTerms';
import ShippingPolicyTerms from './ShippingPolicyTerms';
import SizeChangeTerms from './SizeChangeTerms';
import RefundTerms from './RefundTerms';
import GiftVoucherTerms from './GiftVoucherTerms';
import WarrantyClaimTerms from './WarrantyClaimTerms';
import WarrantyPolicyTerms from './WarrantyPolicyTerms';

type TermsPanelProps = {};

const TermsPanel: FC<TermsPanelProps> = ({}) => {
	return (
		<Flex direction='column' gap={12}>
			<InitialTerms />
      <OrderingPolicyTerms />
			<ShippingPolicyTerms />
      <SizeChangeTerms />
      <RefundTerms />
      <GiftVoucherTerms />
      <WarrantyClaimTerms />
      <WarrantyPolicyTerms />
		</Flex>
	);
};

export default TermsPanel;
