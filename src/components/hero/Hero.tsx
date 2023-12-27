import { Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { heroImages } from '../data/HeroImages';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
	return (
		<>
			<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
				{heroImages.map(item => (
					<SwiperSlide>
						<Image mx='auto' key={item.id} src={item.href} alt={item.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Hero;
