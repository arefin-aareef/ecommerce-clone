import { Tab } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ProductPageTabProps = {
	children: ReactNode;
};

const ProductPageTab: FC<ProductPageTabProps> = ({children}) => {


  return (
		<Tab
			fontWeight='600'
			fontSize='1.25rem'
			bg='sidebarHoverColor'
			rounded='unset'
			border='1px'
			borderColor='tabBorderColor'
			_selected={{
				bg: 'primaryWhite',
				borderTop: '2px solid black',
				borderBottom: '1px solid transparent',

			}}
		>
			{children}
		</Tab>
	);
};

export default ProductPageTab;