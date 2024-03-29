

import React, { useState, useEffect, useMemo } from 'react';

import { some } from 'lodash';

import { useCombinedRefs } from './useCombinedRefs';

const useIsVisible = <T extends HTMLElement>(
	listRef: React.RefObject<HTMLDivElement> | undefined,
	itemRef?: React.Ref<T>
): [boolean, React.RefObject<T>] => {
	const [visible, setVisible] = useState(false);
	const ref = useCombinedRefs(itemRef || null);

	const observer = useMemo(() => {
		if (listRef) {
			return new IntersectionObserver(
				(entries) => {
					setVisible(some(entries, (entry) => entry.isIntersecting));
				},
				{
					root: listRef.current
				}
			);
		}
		return undefined;
	}, [listRef]);

	useEffect(() => {
		const { current } = ref;
		if (current && observer) {
			observer.observe(current);
		}
		return () => {
			if (current && observer) {
				observer.unobserve(current);
			}
		};
	}, [observer, ref]);

	return [visible, ref];
};

export { useIsVisible };
