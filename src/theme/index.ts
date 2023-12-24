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
	navBg: '#f7f7f7',
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
	// components,
	breakpoints,
	// shadows,
});