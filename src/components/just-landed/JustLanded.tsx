'use client';
import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { newArrival } from '../data/NewArrival';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductCard from '../product-card/ProductCard';

type JustLandedProps = {};

const JustLanded: FC<JustLandedProps> = ({}) => {
	return (
		<Flex direction='column' gap={4} maxW='1280px'>
			<Text fontSize='1.625rem' fontWeight={600}>
				JUST LANDED
			</Text>
			<Tabs variant='soft-rounded' colorScheme='gray'>
				<Flex w={{ base: '360px', md: 'full' }}>
					<TabList pb={6} w='fit-content' mx='auto' overflowX='auto'>
						{newArrival.map(item => (
							<Tab key={item.id} w='auto' px={6} py={2}>
								{item.category}
							</Tab>
						))}
					</TabList>
				</Flex>

				<TabPanels w='100%'>
					{newArrival.map(item => (
						<TabPanel key={item.id} w='full'>
							<Flex w='full' maxW='100vw' minW='100%'>
								{item.product && (
									<Swiper
										style={{ width: '100%', maxWidth: '100vw' }}
										slidesPerView={5}
										spaceBetween={30}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination]}
									>
										{item.product.map(product => (
											<SwiperSlide style={{ maxWidth: '100vw' }}>
												<ProductCard product={product} />
											</SwiperSlide>
										))}
									</Swiper>
								)}
							</Flex>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default JustLanded;
