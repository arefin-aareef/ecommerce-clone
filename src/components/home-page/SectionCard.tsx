import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type HandPickedCardProps = {
	item: any;
	buttonTitle: String;
};

const SectionCard: FC<HandPickedCardProps> = ({ item, buttonTitle }) => {
	return (
		<Flex w='full' direction='column' gap={3}>
			<Flex w='full' overflow='hidden' cursor='pointer'>
				<Image
					_hover={{
						transform: 'scale(1.1)',
						transition: 'transform 0.3s ease-in-out',
						opacity: 'rgba(0, 0, 0, 0.3)',
					}}
					w='100%'
					h='100%'
					src={item.img}
				/>
			</Flex>

			<Flex position='relative' justifyContent='center' w='full'>
				<Flex
					position='absolute'
					top={-7}
					direction='column'
					bg='white'
					w='80%'
					py={3}
					gap={2}
				>
					<Text
						textColor='sectionCardTitleColor'
						textAlign='center'
						fontSize='0.875rem'
						noOfLines={1}
					>
						{item.subTitle}
					</Text>
					<Text textAlign='center' fontSize='1.25rem' noOfLines={1}>
						{item.name}
					</Text>
				</Flex>
			</Flex>

			<Text pt={10} textAlign='center' px={4} noOfLines={5}>
				{item.description}
			</Text>
			<Button _hover={{ bg: 'transparent' }} bg='transparent'>
				{buttonTitle}
			</Button>
		</Flex>
	);
};

export default SectionCard;
