'use client';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';
import NavbarTop from '../navbar/NavbarTop';
import Footer from '../footer/Footer';

type HomePageLayoutProps = {
	children: ReactNode;
};

const HomePageLayout: FC<HomePageLayoutProps> = ({ children }) => {
	return (
		<Box 
    px={{base: '20px', md: '80px', xl: '0px'}}
    >
			<NavbarTop />
			<Navbar />
			<Flex minH='100vh' mx='auto' maxW='1280px'>
				<Body>{children}</Body>
			</Flex>
      <Footer />
		</Box>
	);
};

export default HomePageLayout;
