'use client';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';
import NavbarTop from '../navbar/NavbarTop';
import Footer from '../footer/Footer';
import Hero from '../hero/Hero';

type HomePageLayoutProps = {
	children: ReactNode;
};

const HomePageLayout: FC<HomePageLayoutProps> = ({ children }) => {
	return (
		<>
			<NavbarTop />
			<Navbar />
			<Hero />

			<Flex
				px={{ base: '20px', md: '80px', xl: '20px' }}
				minH={{ base: 'calc(100vh - 50px)', xl: 'calc(100vh - 143px)' }}
				mx='auto'
				maxW='1280px'
				w='full'
			>
				<Body>{children}</Body>
			</Flex>

			<Footer />
		</>
	);
};

export default HomePageLayout;
