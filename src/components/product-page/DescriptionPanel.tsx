import { descriptions } from '@/lib/Constants';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type DescriptionPanelProps = {
	singleProduct: any;
};

const DescriptionPanel: FC<DescriptionPanelProps> = ({ singleProduct }) => {
	return (
		<Flex direction='column' gap={8}>
			<Text fontWeight='600'>{descriptions[0]}</Text>
			<Text>{Array(7).fill(singleProduct.description).join(' ')}</Text>
			<Flex direction='column'>
				<Text>{descriptions[1]}</Text>
				<Text>
					{descriptions[2]} {singleProduct.type}
				</Text>
				<Text>
					{descriptions[3]} {singleProduct.gender}
				</Text>
				<Text>
					{descriptions[4]} {singleProduct.material}
				</Text>
				<Text>
					{descriptions[5]} {singleProduct.color[0]}
				</Text>
				<Text>
					{descriptions[6]} {singleProduct.sole}
				</Text>
			</Flex>
			<Text>
				{descriptions[7]} {Array(4).fill(singleProduct.description).join(' ')}
			</Text>
		</Flex>
	);
};

export default DescriptionPanel;
