import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Banner from '../hero/Banner';
import JustLanded from '../just-landed/JustLanded';
import HandPicked from '../hand-picked/HandPicked';
import FeaturedProduct from '../featured-product/FeaturedProduct';
import BestSeller from '../best-seller/BestSeller';
import Favourite from '../favourite/Favourite';
import RecentPosts from '../recent-posts/RecentPosts';
import BataInstagram from '../bata-instagram/BataInstagram';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Flex direction='column' w='full'>
			<Banner />
			<JustLanded />
			<HandPicked />
			<FeaturedProduct />
			<BestSeller />
			<Favourite />
			<RecentPosts />
			<BataInstagram />
		</Flex>
	);
};

export default HomePage;
