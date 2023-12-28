import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

type ButtonShopNowProps = {};

const ButtonShopNow: FC<ButtonShopNowProps> = ({}) => {
	return (
		<Button bg='black' textColor='white' _hover={{ bg: 'red' }}>
			Shop Now
		</Button>
	);
};

export default ButtonShopNow;
