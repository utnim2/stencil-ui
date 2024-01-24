

import React from 'react';

import { ScreenMode, useScreenMode } from '../../hooks/useScreenMode';

interface ResponsiveProps {
	/** Whether the component's children should be displayed on mobile or desktop mode */
	mode: ScreenMode;
	/** The Window element to use to determine the screenMode */
	target?: Window;
	/** Content to conditionally render */
	children: React.ReactNode | React.ReactNode[];
}

function Responsive({ children, mode, target }: ResponsiveProps): React.JSX.Element {
	const screenMode = useScreenMode(target || window);
	return <>{screenMode === mode && children}</>;
}

export { Responsive, ResponsiveProps };
