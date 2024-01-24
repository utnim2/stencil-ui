import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRestore = (props: SVGProps<SVGSVGElement>): React.JSX.Element => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
		<path d="M20.98 5.994h-4.996V4.326a2.43 2.43 0 0 0-2.497-2.328H10.49a2.43 2.43 0 0 0-2.498 2.328v1.668H2.997c-.548 0-.999.451-.999 1 0 .547.451.998 1 .998H20.98c.548 0 .998-.45.998-.999 0-.548-.45-.999-.998-.999ZM9.99 4.326c0-.16.21-.33.5-.33h2.997c.29 0 .5.17.5.33v1.668H9.99V4.326Z" />
		<path
			fillRule="evenodd"
			d="M4.964 9.975h14.049c.542 0 .983.44.983.983v8.35a2.683 2.683 0 0 1-.145.867 2.667 2.667 0 0 1-1.628 1.638 2.68 2.68 0 0 1-.864.15H6.635a2.683 2.683 0 0 1-.867-.145 2.667 2.667 0 0 1-1.643-1.643 2.682 2.682 0 0 1-.145-.866V10.91h.002a.984.984 0 0 1 .982-.936Zm7.024 1.935h-.1a.818.818 0 0 0-.46.17 1.009 1.009 0 0 0-.13.09l-2.996 2.857a1 1 0 0 0 1.379 1.449l1.308-1.229v3.734c0 .548.451 1 1 1 .547 0 .998-.452.998-1v-3.664l1.29 1.299a.999.999 0 0 0 1.418 0 .999.999 0 0 0 0-1.419L12.697 12.2a.995.995 0 0 0-.32-.21.998.998 0 0 0-.389-.08Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgRestore;