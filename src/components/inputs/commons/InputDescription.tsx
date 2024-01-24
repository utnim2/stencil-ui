
import styled from 'styled-components';

import { Text } from '../../basic/Text';

export const InputDescription = styled(Text).attrs({
	overflow: 'break-word',
	size: 'extrasmall'
})`
	line-height: 1.5;
	padding-top: 0.25rem;
	min-height: calc(${({ theme, size }): string => theme.sizes.font[size]} * 1.5);
`;
