'use client'
import { Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { bataOnInstagram } from '../data/SectionCardCollection';

type BataInstagramProps = {

}

const BataInstagram: FC<BataInstagramProps> = ({}) => {


  return (
		<Flex w='full' direction='column' gap={2}>
			<SectionHeader>Bata On Instagram</SectionHeader>

			<Text textColor='red'>#BATABANGLADESH</Text>

			<Flex w='full' maxW='100vw' minW='100%' py={8}>
				<Swiper
					style={{ width: '100%', maxWidth: '100vw' }}
					slidesPerView={5}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{bataOnInstagram.map((item, i) => (
						<SwiperSlide key={i} style={{ maxWidth: '100vw' }}>
							<Image pb={10} src={item.img} />
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
		</Flex>
	);
};

export default BataInstagram;