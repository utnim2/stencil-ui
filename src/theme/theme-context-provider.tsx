

import React from 'react';

import { ThemeProvider as SCThemeProvider, ThemeContext, DefaultTheme } from 'styled-components';

import DefaultFontStyles from './roboto-global-styles';
import { Theme as defaultTheme } from './theme';
import { generateHighlightSet } from './theme-utils';

interface ThemeProviderProps {
	extension?: (theme: DefaultTheme) => DefaultTheme;
	loadDefaultFont?: boolean;
	children: any
}
//@ts-ignore
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, extension, loadDefaultFont }) => {
	// const _theme = useCallback(
	// 	(parentTheme: DefaultTheme = defaultTheme) => {
	// 		const theme = extension ? extension(parentTheme) : parentTheme;
	// 		theme.palette.highlight = generateHighlightSet(theme.palette.primary);
	// 		return theme;
	// 	},
	// 	[extension]
	// );

	return (
		<SCThemeProvider theme={defaultTheme}>
			{loadDefaultFont && <DefaultFontStyles />}
			{children}
		</SCThemeProvider>
	);
};

export { ThemeContext, ThemeProvider, ThemeProviderProps };
