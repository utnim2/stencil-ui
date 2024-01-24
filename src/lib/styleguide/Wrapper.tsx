
import React from 'react';

import { ThemeProvider } from '../../theme/theme-context-provider';

export default function Wrapper({
	children
}: {
	children?: React.ReactNode | React.ReactNode[];
}): React.JSX.Element {
	//@ts-ignore
	return <ThemeProvider loadDefaultFont>{children}</ThemeProvider>;
}
