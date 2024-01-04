import PageLayout from '@/components/layout/PageLayout';
import BasePadding from '@/components/util/base-padding/BasePadding';
import React, { FC } from 'react';

type layoutProps = {
	children: React.ReactNode;
};

const layout: FC<layoutProps> = ({ children }) => {
	return (
		<PageLayout>
			<BasePadding>{children}</BasePadding>
		</PageLayout>
	);
};

export default layout;
