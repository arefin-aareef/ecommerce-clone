import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Banner from '../home-page/Banner';
import JustLanded from '../home-page/JustLanded';
import HandPicked from '../home-page/HandPicked';
import FeaturedProduct from '../home-page/FeaturedProduct';
import BestSeller from '../home-page/BestSeller';
import Favourite from '../home-page/Favourite';
import RecentPosts from '../home-page/RecentPosts';
import BataInstagram from '../home-page/BataInstagram';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Flex direction='column' w='full' gap={4}>
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
