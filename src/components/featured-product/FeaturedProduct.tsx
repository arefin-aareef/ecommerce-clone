'use client';
import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { featuredCollection } from '../data/FeaturedCollection';
import ProductCard from '../product-card/ProductCard';

type FeaturedProductProps = {};

const FeaturedProduct: FC<FeaturedProductProps> = ({}) => {
	return (
		<Flex maxW='1280px' direction='column' w='full' gap={4}>
			<SectionHeader>Featured Products</SectionHeader>
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
					{featuredCollection.map((product, i) => (
						<SwiperSlide key={i} style={{ maxWidth: '100vw' }}>
							<Flex pb={12} w='full'>
								<ProductCard product={product} />
							</Flex>
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
			<Flex
				w='full'
				justifyContent='center'
				alignItems='center'
				gap={{ base: 4, md: 8 }}
				direction={{ base: 'column', md: 'row' }}
			>
				<Image minH='355px' minW='355px' src='/featured/featured1.jpg' />
				<Image minH='355px' minW='355px' src='/featured/featured2.jpg' />
			</Flex>
		</Flex>
	);
};

export default FeaturedProduct;
