import * as React from 'react';
import type { SVGProps } from 'react';

const SvgConsole = (props: SVGProps<SVGSVGElement>): React.JSX.Element => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
		<path d="M20.98 17.982a2.98 2.98 0 0 1-.908 2.14 2.978 2.978 0 0 1-2.08.857H5.994a2.98 2.98 0 0 1-2.09-.856 2.978 2.978 0 0 1-.908-2.14V8.99H20.98v8.991ZM8.667 11.176a.996.996 0 0 0-.303-.207.993.993 0 0 0-1.123.244.98.98 0 0 0 .035 1.354l1.499 1.416L7.276 15.4a.993.993 0 0 0 .037 1.426.98.98 0 0 0 1.354-.035l2.012-2.013a.987.987 0 0 0 .395-.795.981.981 0 0 0-.395-.795l-2.012-2.012Zm7.395 3.907h-2.997a.984.984 0 0 0 0 1.967h2.997a.984.984 0 0 0 0-1.967Zm4.918-8.105H2.997v-.984a3.011 3.011 0 0 1 2.997-2.997h11.988a3.011 3.011 0 0 1 2.998 2.997v.984Z" />
	</svg>
);
export default SvgConsole;
