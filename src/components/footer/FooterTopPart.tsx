import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Grid,
	GridItem,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { footerHeading } from '../data/FooterData';
import FooterItem from './FooterItem';

type FooterTopPartProps = {};

const FooterTopPart: FC<FooterTopPartProps> = ({}) => {
	return (
		<Flex direction='column'>
			{/* For Desktop */}
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
				<GridItem>
					<Text fontWeight='600' pb={5}>
						INFO
					</Text>
					<Text pb={4}>
						Bata Shoe Company <br />
						Bangladesh Ltd. <br />
						Tongi Gazipur, Bangladesh.
					</Text>
					<Text>
						Call us at: 09666200300 <br />
						(9am-9pm) <br />
						Email: <br />
						bd.customercare@bata.com
					</Text>
				</GridItem>
			</Grid>

			{/* For Mobile */}
			<Accordion
				defaultIndex={[4]}
				allowMultiple
				display={{ base: 'block', md: 'none' }}
				pt={6}
			>
				{footerHeading.map(item => (
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
				))}
			</Accordion>

			<Flex
				direction='column'
				pl={4}
				py={4}
				display={{ base: 'block', md: 'none' }}
			>
				<Text fontWeight='600' pb={5}>
					INFO
				</Text>
				<Text pb={4}>
					Bata Shoe Company Bangladesh Ltd. <br />
					Tongi Gazipur, Bangladesh.
				</Text>
				<Text>
					Call us at: 09666200300 (9am-9pm) <br />
					Email: bd.customercare@bata.com
				</Text>
			</Flex>
		</Flex>
	);
};

export default FooterTopPart;
