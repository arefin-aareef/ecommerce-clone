import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BsCart3 } from 'react-icons/bs';

type CartIconProps = {

}

const CartIcon: FC<CartIconProps> = ({}) => {


  return (
		<Flex position='relative' cursor='pointer'>
			<BsCart3 size={24} />
			<Text
				position='absolute'
				bottom={2}
				left={2}
				bg='black'
				textColor='white'
				rounded='100%'
				w='full'
				textAlign='center'
			>
				0
			</Text>
		</Flex>
	);
};

export default CartIcon;