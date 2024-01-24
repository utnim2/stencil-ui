import * as React from 'react';
import type { SVGProps } from 'react';

const SvgWaitingOutline = (props: SVGProps<SVGSVGElement>): React.JSX.Element => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
		<path
			fillRule="evenodd"
			d="M17.299 20.502c-.285.17-.875.486-.875.486-4.81 2.263-10.673.307-13.136-4.451C.95 12.02 2.44 6.463 6.55 3.667c0 0 .738-.435 1.123-.63a.987.987 0 0 1 .892 1.76 7.947 7.947 0 0 0-1.466.958c-.02.016-.04.032-.06.046-2.8 2.351-3.72 6.446-1.976 9.816 1.95 3.766 6.559 5.337 10.384 3.619l.004.007c.288-.129.567-.274.834-.434a.987.987 0 0 1 1.012 1.693Zm2.334-5.642a8.057 8.057 0 0 1-.817 1.552.987.987 0 0 0 1.635 1.103 10.02 10.02 0 0 0 1.017-1.932.987.987 0 0 0-1.835-.723ZM16.006 11h-3V8c0-.55-.452-1-1-1-.549 0-1 .45-1 1v4c0 .548.451 1 1 1h4c.548 0 1-.452 1-1 0-.55-.452-1-1-1Zm3.86-1.309a8.106 8.106 0 0 1 .304 1.728.987.987 0 0 0 1.968-.13 10.047 10.047 0 0 0-.379-2.149.987.987 0 0 0-1.894.551Zm-2.98-4.228c.473.344.909.739 1.298 1.18a.987.987 0 0 0 1.478-1.308 10.023 10.023 0 0 0-1.617-1.468.987.987 0 0 0-1.16 1.596Zm-4.943-1.527a7.934 7.934 0 0 1 1.746.14.987.987 0 0 0 .372-1.938 9.902 9.902 0 0 0-2.179-.173.987.987 0 0 0 .061 1.971Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgWaitingOutline;
