import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { footerHeading } from '../data/FooterData';
import FooterItem from './FooterItem';
import Image from 'next/image';
import { footerGatewayPic } from '../data/FooterGatewayPic';
import { footerIcon } from '../data/FooterIcons';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
	return (
		<Flex bgColor='footerBg' w='full' textColor='white'>
			<Flex minW='1280px' mx='auto' direction='column'>
				{/* Top Part */}
				<Grid templateColumns='repeat(5, 1fr)' pt='36px' pb='24px'>
					{footerHeading.map(item => (
						<Flex direction='column' key={item.id}>
							<Text fontWeight='600' pb='20px'>
								{item.name}
							</Text>
							<Flex direction='column'>
								{item.subFooter &&
									item.subFooter.map(subItem => (
										<FooterItem key={subItem.title}>{subItem.title}</FooterItem>
									))}
							</Flex>
						</Flex>
					))}
				</Grid>
				<Divider />

				{/* Bottom Part */}
				<Flex pt='24px' pb='76px' direction='column'>
					<Flex w='full' justifyContent='space-between'>
						<Text cursor='pointer' fontWeight='600'>
							Sign up for our Newsletter
						</Text>
						<Flex gap='16px'>
							{footerIcon.map(item => (
								<Box key={item.id}>{item.icon}</Box>
							))}
						</Flex>
					</Flex>
					<Text
						color='footerText'
						py={6}
						cursor='pointer'
						w='fit-content'
						mx='auto'
					>
						© 2023 Bata Shoe Company Bangladesh Ltd. Tongi, Postal code - 1710,
						Gazipur, Bangladesh
					</Text>
					<Flex w='full' justifyContent='center' gap={3}>
						{footerGatewayPic.map(item => (
							<Box cursor='pointer' key={item.id}>
								<Image width={24} height={24} src={item.href} alt={item.alt} />
							</Box>
						))}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Footer;
