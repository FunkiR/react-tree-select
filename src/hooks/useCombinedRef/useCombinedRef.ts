import {Ref, RefObject, useEffect} from 'react';

/**
 * Used when need to proxy the received ref to the component below
 *
 * @template T
 *
 * @param {Ref<T>} targetRef - received ref
 * @param {Ref<T>} innerRef - ref to be passed to the component below
 * @returns {Ref<T>}
 */

export const useCombinedRef = <T>(targetRef: Ref<T>, innerRef: RefObject<T>): RefObject<T> => {
	useEffect(() => {
		if (!targetRef) return;

		if (typeof targetRef === 'function') {
			targetRef(innerRef.current);
		} else {
			(targetRef as any).current = innerRef.current;
		}
	}, [targetRef, innerRef]);

	return innerRef;
};

export default useCombinedRef;
