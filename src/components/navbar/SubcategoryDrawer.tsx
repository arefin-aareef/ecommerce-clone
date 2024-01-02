// SubcategoryDrawer.tsx
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type SubcategoryDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string | null;
	subcategories: {
		title: string;
		subCategory?: { subCategoryName: string; href: string }[];
	}[];
};

const SubcategoryDrawer: FC<SubcategoryDrawerProps> = ({
	isOpen,
	onClose,
	title,
	subcategories,
}) => {
	return (
		<Drawer isOpen={isOpen} placement='left' onClose={onClose} size='xs'>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerBody>
					<Flex direction='column'>
						<Text fontSize='lg' fontWeight='bold' mb={4}>
							{title}
						</Text>
						{subcategories.map(subcategory => (
							<Flex key={subcategory.title} direction='column'>
								<Text fontWeight='bold'>{subcategory.title}</Text>
								{/* {(subcategory.subCategory ?? []).map(subItem => (
									<Flex key={subItem.subCategoryName} alignItems='center'>
										<Text>{subItem.subCategoryName}</Text>
									</Flex>
								))} */}
							</Flex>
						))}
					</Flex>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default SubcategoryDrawer;
