'use client';
import { Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';
import NavbarTop from '../navbar/NavbarTop';

type HomePageLayoutProps = {
	children: ReactNode;
};

const HomePageLayout: FC<HomePageLayoutProps> = ({ children }) => {
	return (
    <>
      <NavbarTop />
      <Navbar />
      <Flex>
        <Body>
          {children}
        </Body>
      </Flex>
    </>
  );
};

export default HomePageLayout;
