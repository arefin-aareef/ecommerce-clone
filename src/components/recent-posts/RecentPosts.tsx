import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionHeader from '../util/section-header/SectionHeader';
import { recentPostCollection } from '../data/SectionCardCollection';
import SectionCard from '../hand-picked/SectionCard';

type RecentPostsProps = {};

const RecentPosts: FC<RecentPostsProps> = ({}) => {
	return (
		<Flex w='full' direction='column' gap={4}>
			<SectionHeader>Recent Posts</SectionHeader>
			<Flex direction={{base: 'column', md: 'row'}} gap={{base: 1, md: 7}}>
				{recentPostCollection.map((item, i) => (
					<SectionCard key={i} buttonTitle='READ MORE' item={item} />
				))}
			</Flex>
		</Flex>
	);
};

export default RecentPosts;
