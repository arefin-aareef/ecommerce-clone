'use client';
import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { newArrival } from '../util/data/NewArrival';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';
import SectionHeader from '../util/section-header/SectionHeader';

type JustLandedProps = {};

const JustLanded: FC<JustLandedProps> = ({}) => {
	return (
		<Flex direction='column' gap={4} maxW='1280px' w='full'>
			<SectionHeader>JUST LANDED</SectionHeader>
			<Tabs variant='soft-rounded' colorScheme='gray' gap={4}>
				<Flex w={{ base: '360px', md: 'full' }}>
					<TabList w='fit-content' mx='auto' overflowX='auto'>
						{newArrival.map(item => (
							<Tab key={item.id} w='auto' px={6} py={2}>
								{item.subCategory}
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
										spaceBetween={2}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination]}
									>
										{item.product.map((product, i) => (
											<SwiperSlide key={i} style={{ maxWidth: '100vw' }}>
												<Flex pb={8} w='full'>
													<ProductCard product={product} />
												</Flex>
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
