import { Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import NavbarTop from '../navbar/NavbarTop';
import Navbar from '../navbar/Navbar';
import Body from './Body';

type PageLayoutProps = {
	children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<Flex direction='column' maxW='100vw'>
			<NavbarTop />
			<Navbar />
			<Flex w='100vw' mx='auto'>
				<Body>{children}</Body>
			</Flex>
		</Flex>
	);
};

export default PageLayout;