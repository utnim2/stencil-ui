
import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

const Pre = styled.pre`
	color: ${({ theme }): string => theme.palette.text.regular};
`;

export default function ThemePrinter(): React.JSX.Element {
	// eslint-disable-next-line unused-imports/no-unused-vars
	const {  ...theme } = useContext(ThemeContext);

	return <Pre>{JSON.stringify(theme, null, 2)}</Pre>;
}
