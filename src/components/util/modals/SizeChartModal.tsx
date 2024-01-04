import {  sizeModalImg } from '@/lib/Constants';
import { Box, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { FC } from 'react';
import { RxRulerHorizontal } from 'react-icons/rx';

type SizeChartModalProps = {

}

const SizeChartModal: FC<SizeChartModalProps> = ({}) => {
const { isOpen, onOpen, onClose } = useDisclosure();

  return (
		<Flex>
			<Flex as='button' onClick={onOpen} alignItems='center' gap={1}>
				<RxRulerHorizontal size={20} />
				<Text>SIZE CHART</Text>
			</Flex>
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
							<Image w='100%' h='auto' src={sizeModalImg} />
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Flex>
	);
};

export default SizeChartModal;