import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import ProductPageTab from '../util/tabs/ProductPageTab';
import DescriptionPanel from './DescriptionPanel';
import TermsPanel from './TermsPanel';

type ProductDetailsTabSectionProps = { singleProduct: any };

const ProductDetailsTabSection: FC<ProductDetailsTabSectionProps> = ({
	singleProduct,
}) => {
	return (
		<Tabs variant='enclosed'>
			<TabList>
				<ProductPageTab>DESCRIPTION</ProductPageTab>
				<ProductPageTab>TERMS AND CONDITIONS</ProductPageTab>
				<ProductPageTab>SIZE CHART</ProductPageTab>
			</TabList>

			<TabPanels pt={4}>
				<TabPanel>
					<DescriptionPanel singleProduct={singleProduct} />
				</TabPanel>

				<TabPanel>
					<TermsPanel />
				</TabPanel>

				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default ProductDetailsTabSection;
