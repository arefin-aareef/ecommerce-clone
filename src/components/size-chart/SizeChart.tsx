import { sizeModal } from '@/lib/Constants';
import {
	Box,
	Button,
	Divider,
	Flex,
	Grid,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { RxRulerHorizontal } from 'react-icons/rx';

type SizeChartProps = {
	singleProduct: any;
};

const SizeChart: FC<SizeChartProps> = ({ singleProduct }) => {
	const [selectedSize, setSelectedSize] = useState(singleProduct.size[0]);

	const handleSizeSelect = (size: number) => {
		setSelectedSize(size);
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

  const sizeButtons = (
		<Flex gap={3}>
			{singleProduct.size.map((size: number) => (
				<Box
					key={size}
					bg={size === selectedSize ? 'black' : 'white'}
					textColor={size === selectedSize ? 'primaryWhite' : 'black'}
					borderWidth={size === selectedSize ? '1px' : '1px'}
					borderColor={
						size === selectedSize ? 'black' : 'productCardBorderColor'
					}
					h={10}
					w={10}
					rounded='full'
					cursor='pointer'
					onClick={() => handleSizeSelect(size)}
				>
					<Text textAlign='center' pt={2}>
						{size}
					</Text>
				</Box>
			))}
		</Flex>
	);

  const modal = (
		<Modal
			closeOnOverlayClick={false}
			size='2xl'
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent position='relative'>
				<ModalCloseButton
					position='absolute'
					bg='black'
					textColor='white'
					top={-4}
					right={-4}
				/>
				<ModalHeader p={2} mx='auto' fontWeight={400}>
					SIZE CHART
				</ModalHeader>
				<Divider />
				<ModalBody py={8} px={20}>
					<Box>
						<Image w='100%' h='auto' src={sizeModal} />
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	);

	return (
		<Flex direction='column' gap={3}>
			<Flex justifyContent='space-between' w='full'>
				<Flex gap={1}>
					<Text fontSize='0.875em' fontWeight='600'>
						Size
					</Text>
					<Text textColor='red'>*</Text>
				</Flex>

				<Flex as='button' onClick={onOpen} alignItems='center' gap={1}>
					<RxRulerHorizontal size={20} />
					<Text>SIZE CHART</Text>
				</Flex>
				{modal}
			</Flex>

			{sizeButtons}
		</Flex>
	);
};

export default SizeChart;
