import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Banner from '../hero/Banner';

type HomePageProps = {

}

const HomePage: FC<HomePageProps> = ({}) => {


  return (
    <Flex>
      <Banner />
    </Flex>
  );
};

export default HomePage;