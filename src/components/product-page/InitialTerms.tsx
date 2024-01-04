import { termsInitials } from '@/lib/Constants';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type InitialTermsProps = {

}

const InitialTerms: FC<InitialTermsProps> = ({}) => {


  return (
		<Flex direction='column' gap={8}>
			{termsInitials.map((item, index) => (
				<Text
					key={index}
					fontWeight={index === 1 || index === 2 ? 600 : 'normal'}
				>
					{item}
				</Text>
			))}
		</Flex>
	);
};

export default InitialTerms;