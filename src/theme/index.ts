'use client';
import {
	// cssVar,
	// defineStyle,
	// defineStyleConfig,
	extendTheme,
	ThemeConfig,
} from '@chakra-ui/react';


// 2. Add color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

// 3. extend the theme
const colors = {
	primaryWhite: '#ffffff',
	secondaryBlack: '#000000',
	navBg: '#f7f7f7',
	footerBg: '#141414',
	footerText: '#969696',
	previousPrice: '#969696',
	currentPrice: '#e7040f',
	sectionCardTitleColor: '#9d9e9d',
	sidebarHoverColor: '#fafafa',
	cartSidebarTextColor: '#2d2d2d',
	productCardBorderColor: '#ebebeb',
};

// 6. Add Breakpoints
export const breakpoints = {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
};

export const theme = extendTheme({
	config,
	colors,
	breakpoints,
	// components,
	// shadows,
});
