import { sizeModalImg2 } from '@/lib/Constants';
import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type SizeChartPanelProps = {

}

const SizeChartPanel: FC<SizeChartPanelProps> = ({}) => {


  return (
    <Flex>
      <Image w='100%' h='auto' src={sizeModalImg2} />
    </Flex>
  );
};

export default SizeChartPanel;