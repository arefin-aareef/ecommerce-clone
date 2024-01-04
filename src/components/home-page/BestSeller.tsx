'use client';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { bestSellerCollection } from '../util/data/BestSellerCollection';
import ProductCard from './ProductCard';

type BestSellerProps = {};

const BestSeller: FC<BestSellerProps> = ({}) => {
	return (
		<Flex maxW='1280px' direction='column' w='full' gap={4}>
			<SectionHeader>Best Seller</SectionHeader>
			<Flex w='full' maxW='100vw' minW='100%'>
				<Swiper
					style={{ width: '100%', maxWidth: '100vw' }}
					slidesPerView={5}
					spaceBetween={2}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{bestSellerCollection.map((product, i) => (
						<SwiperSlide key={i} style={{ maxWidth: '100vw' }}>
							<Flex pb={12} w='full'>
								<ProductCard product={product} />
							</Flex>
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
		</Flex>
	);
};

export default BestSeller;
