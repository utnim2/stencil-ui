

import React, { useCallback, useRef, useState } from 'react';

import { Input, InputProps } from './Input';
import { Icon } from '../basic/Icon';
import { Container } from '../layout/Container';

const PasswordInput = React.forwardRef<HTMLDivElement, InputProps>(function PasswordInputFn(
	props,
	ref
) {
	const [show, setShow] = useState(false);
	const showRef = useRef(show);

	const onShowClick = useCallback((ev: React.SyntheticEvent) => {
		ev.stopPropagation();
		setShow((s) => {
			showRef.current = !s;
			return !s;
		});
	}, []);

	const CustomIcon: InputProps['CustomIcon'] = useCallback(
		({ hasError, hasFocus, disabled }:{hasError:boolean, hasFocus:boolean, disabled:boolean}) => (
			<Container
				style={{
					cursor: disabled ? 'default' : 'pointer',
					userSelect: 'none'
				}}
				onClick={(ev: React.SyntheticEvent): void => {
					!disabled && onShowClick(ev);
				}}
			>
				<Icon
					icon={showRef.current ? 'EyeOutline' : 'EyeOffOutline'}
					size="large"
					color={(hasError && 'error') || (hasFocus && 'primary') || 'secondary'}
					disabled={disabled}
				/>
			</Container>
		),
		[onShowClick]
	);
	return <Input ref={ref} {...props} type={show ? 'text' : 'password'} CustomIcon={CustomIcon} />;
});

export { PasswordInput };
