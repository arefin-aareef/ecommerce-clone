import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SizeChartModal from '../util/modals/SizeChartModal';
import SizeRoundedButton from '../util/buttons/SizeRoundedButton';

type SizeChartSectionProps = {
	singleProduct: any;
};

const SizeChartSection: FC<SizeChartSectionProps> = ({ singleProduct }) => {
	return (
		<Flex direction='column' gap={3}>
			<Flex justifyContent='space-between' w='full'>
				<Flex gap={1}>
					<Text fontSize='0.875em' fontWeight='600'>
						Size
					</Text>
					<Text textColor='red'>*</Text>
				</Flex>
				<SizeChartModal />
			</Flex>
			<SizeRoundedButton singleProduct={singleProduct} />
		</Flex>
	);
};

export default SizeChartSection;
