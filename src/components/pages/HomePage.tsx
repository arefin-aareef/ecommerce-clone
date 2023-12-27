import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Banner from '../hero/Banner';
import JustLanded from '../just-landed/JustLanded';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Flex direction='column' w='full'>
			<Banner />
			<JustLanded />
		</Flex>
	);
};

export default HomePage;
