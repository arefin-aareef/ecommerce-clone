import PageLayout from '@/components/layout/PageLayout';
import React, { FC } from 'react';

type layoutProps = {
	children: React.ReactNode;
};

const layout: FC<layoutProps> = ({ children }) => {


	return <PageLayout>{children}</PageLayout>;
};

export default layout;