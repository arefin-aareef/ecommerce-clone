import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { footerIcon } from '../data/FooterIcons';
import { footerGatewayPic } from '../data/FooterGatewayPic';

type FooterBottomPartProps = {};

const FooterBottomPart: FC<FooterBottomPartProps> = ({}) => {
	return (
		<Flex pt={6} pb={19} direction='column' gap={6}>
			<Flex
				w='full'
				justifyContent='space-between'
				direction={{ base: 'column', md: 'row' }}
				gap={{ base: 4, md: 0 }}
			>
				<Text cursor='pointer' fontWeight='600'>
					Sign up for our Newsletter
				</Text>
				<Flex gap={4}>
					{footerIcon.map(item => (
						<Box cursor='pointer' key={item.id}>
							{item.icon}
						</Box>
					))}
				</Flex>
			</Flex>
			<Text color='footerText' cursor='pointer' w='fit-content' mx='auto'>
				© 2023 Bata Shoe Company Bangladesh Ltd. Tongi, Postal code - 1710,
				Gazipur, Bangladesh
			</Text>
			<Flex w='full' justifyContent='center' gap={3}>
				{footerGatewayPic.map(item => (
					<Box cursor='pointer' key={item.id}>
						<Image width='24px' height='24px' src={item.href} alt={item.alt} />
					</Box>
				))}
			</Flex>
		</Flex>
	);
};

export default FooterBottomPart;
