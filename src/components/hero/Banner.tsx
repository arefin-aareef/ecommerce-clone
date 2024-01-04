'use client';
import { Grid, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { bannerImages } from '../data/BannerImages';

type BannerProps = {};

const Banner: FC<BannerProps> = ({}) => {
	return (
		<Grid
			templateColumns={{base: 'repeat(2, 1fr)' , md: 'repeat(4, 1fr)' }}
			gap={{ base: 4, md: 6 }}
			h='fit-content'
		>
			{bannerImages.map(item => (
				<Image
					key={item.id}
					src={item.href}
					alt={item.alt}
					gridColumn={item.id === 5 ? ({base: 'span 2', md: 'span 4'}) : 'auto'}
				/>
			))}
		</Grid>
	);
};

export default Banner;
