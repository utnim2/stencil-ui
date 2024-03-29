
import styled, { css, SimpleInterpolation } from 'styled-components';

import { getColor, pseudoClasses } from '../../../theme/theme-utils';
import { Container, ContainerProps } from '../../layout/Container';

export const InputContainer = styled(Container)<{
	background: NonNullable<ContainerProps['background']>;
	$disabled?: boolean;
	$hasLabel?: boolean;
}>`
	position: relative;
	${({ $disabled, background, theme }): SimpleInterpolation =>
		$disabled
			? css`
					background: ${getColor(`${background}.disabled`, theme)};
			  `
			: css`
					cursor: text;
					${pseudoClasses(theme, background)}
			  `};
	padding: ${({ $hasLabel }): string => ($hasLabel ? '0.0625rem' : '0.625rem')} 0.75rem;
	gap: 0.5rem;
	min-height: calc(
		${({ theme }): string => theme.sizes.font.medium} * 1.5 +
			${({ theme }): string => theme.sizes.font.extrasmall} * 1.5 + 0.125rem
	);
`;
