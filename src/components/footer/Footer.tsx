import { Divider, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import FooterTopPart from './FooterTopPart';
import FooterBottomPart from './FooterBottomPart';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
	return (
		<Flex bgColor='footerBg' w='full' textColor='white'>
			<Flex
				w='1280px'
				mx='auto'
				direction='column'
				px={{ base: 5, md: 20, xl: 5 }}
			>
				<FooterTopPart />
				<Divider />
				<FooterBottomPart />
			</Flex>
		</Flex>
	);
};

export default Footer;
