'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionHeader from '../util/section-header/SectionHeader';
import { Flex } from '@chakra-ui/react';
import { favouriteCollection } from '../data/CardDataCollection';
import SectionCard from '../hand-picked/SectionCard';

type FavouriteProps = {};

const Favourite: FC<FavouriteProps> = ({}) => {
	return (
		<Flex w='full' direction='column' maxW='1280px'>
			<SectionHeader>PICK YOUR FAVOURITES</SectionHeader>

			<Flex w='full' maxW='100vw' minW='100%'>
				<Swiper
					style={{ width: '100%', maxWidth: '100vw' }}
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{favouriteCollection.map((item, i) => (
						<SwiperSlide key={i} style={{ maxWidth: '100vw' }}>
							<SectionCard item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
		</Flex>
	);
};

export default Favourite;
