import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Divider,
	Flex,
	Grid,
	Text,
} from '@chakra-ui/react';
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
			<Flex
				w='1280px'
				mx='auto'
				direction='column'
				px={{ base: 5, md: 20, xl: 5 }}
			>
				{/* Top Part */}
				<Grid
					templateColumns={{
						base: '1fr',
						md: 'repeat(3, 1fr)',
						xl: 'repeat(5, 1fr)',
					}}
					pt={9}
					pb={6}
					display={{ base: 'none', md: 'grid' }}
				>
					{footerHeading.map(item => (
						<Flex direction='column' key={item.id}>
							<Text fontWeight='600' pb={5}>
								{item.name}
							</Text>
							<Flex direction='column'>
								{item.subFooter &&
									item.subFooter.map(subItem => (
										<>
											{item.name === 'INFO' ? (
												<FooterItem variant='info' key={subItem.title}>
													{subItem.title}
												</FooterItem>
											) : (
												<FooterItem variant='link' key={subItem.title}>
													{subItem.title}
												</FooterItem>
											)}
										</>
									))}
							</Flex>
						</Flex>
					))}
				</Grid>

				<Accordion
					defaultIndex={[4]}
					allowMultiple
					display={{ base: 'block', md: 'none' }}
					pt={6}
				>
					{footerHeading.map(item => (
						<>
							{item.name === 'INFO' ? (
								<AccordionItem>
									<AccordionButton key={item.id}>
										<Box as='span' flex='1' textAlign='left'>
											{item.name}
										</Box>
										{/* <AccordionIcon /> */}
									</AccordionButton>

									{item.subFooter.map(subItem => (
										<AccordionPanel pb={4}>
											<FooterItem variant='info' key={subItem.title}>
												{subItem.title}
											</FooterItem>
										</AccordionPanel>
									))}
								</AccordionItem>
							) : (
								<AccordionItem>
									<AccordionButton key={item.id}>
										<Box as='span' flex='1' textAlign='left'>
											{item.name}
										</Box>
										<AccordionIcon />
									</AccordionButton>

									{item.subFooter.map(subItem => (
										<AccordionPanel pb={4}>
											<FooterItem variant='link' key={subItem.title}>
												{subItem.title}
											</FooterItem>
										</AccordionPanel>
									))}
								</AccordionItem>
							)}
						</>
					))}
				</Accordion>

				<Divider />

				{/* Bottom Part */}
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
