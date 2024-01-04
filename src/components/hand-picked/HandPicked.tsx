'use client';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { handPickedCollection } from '../data/SectionCardCollection';
import SectionCard from './SectionCard';

type HandPickedProps = {};

const HandPicked: FC<HandPickedProps> = ({}) => {
	return (
		<Flex w='full' direction='column' maxW='1280px' gap={4}>
			<SectionHeader>OUR HAND PICKED COLLECTION FOR YOU</SectionHeader>

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
					{handPickedCollection.map((item, i) => (
						<SwiperSlide key={i} style={{ maxWidth: '100vw' }}>
							<SectionCard buttonTitle='SHOP NOW' item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
		</Flex>
	);
};

export default HandPicked;
