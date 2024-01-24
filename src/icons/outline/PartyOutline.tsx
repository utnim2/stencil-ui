import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPartyOutline = (props: SVGProps<SVGSVGElement>): React.JSX.Element => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
		<path
			fillRule="evenodd"
			d="M15.511 14.374c-1.742-.066-3.307-1.302-3.7-3.076a.328.328 0 0 1-.006-.03h-.002l-.911-6.257a.724.724 0 0 1 .555-.86l5.344-1.188a.724.724 0 0 1 .866.543l1.826 6.054h-.001l.008.03c.394 1.774-.5 3.557-2.05 4.355l.914 4.108 1.423-.316a.988.988 0 0 1 .429 1.928l-4.776 1.062a.989.989 0 0 1-.429-1.929l1.424-.316-.914-4.108Zm.646-2.034a1.972 1.972 0 0 0 1.415-2.291l-1.481-4.912-3.089.687.74 5.076a1.972 1.972 0 0 0 2.252 1.477.883.883 0 0 1 .163-.037ZM5.943 14.796c-1.687-.443-2.946-1.99-2.946-3.807l.001-.03.467-6.306c0-.397.327-.72.729-.72h5.474c.402 0 .728.323.728.72l.468 6.305v.031c0 1.817-1.259 3.364-2.945 3.807v4.208h1.458a.989.989 0 0 1 0 1.976H4.485a.989.989 0 0 1 0-1.976h1.458v-4.208Zm1.071-1.845a1.973 1.973 0 0 0 1.879-1.93l-.38-5.117H5.348l-.38 5.116a1.973 1.973 0 0 0 1.879 1.93 1.008 1.008 0 0 1 .167 0Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgPartyOutline;