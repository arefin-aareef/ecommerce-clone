'use client';

import { store } from '@/store';
import { theme } from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<Provider store={store}>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</Provider>
		</CacheProvider>
	);
}
