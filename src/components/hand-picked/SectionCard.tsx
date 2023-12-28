import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type HandPickedCardProps = {
	item: any;
};

const SectionCard: FC<HandPickedCardProps> = ({ item }) => {
	return (
		<Flex w='full' py={12} direction='column' gap={3}>
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
				<Text
					position='absolute'
					top={-7}
					textAlign='center'
					w='80%'
					bg='white'
					py={3}
					fontSize='1.25rem'
				>
					{item.name}
				</Text>
			</Flex>
			<Text pt={8} textAlign='center' px={4}>
				{item.description}
			</Text>
			<Button _hover={{ bg: 'transparent' }} bg='transparent'>
				SHOP NOW
			</Button>
		</Flex>
	);
};

export default SectionCard;
