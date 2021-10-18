import {RefObject, useEffect} from "react";

/**
 * Catches a click outside the element passed to ref and calls the provided callback
 *
 * @param {RefObject<HTMLElement>} ref - ref of the element relative to which the click is caught
 * @param {Function} callback - function that calls when event caught
 * @param {boolean} active - is for telling whether to catch the event
 */

export const useOutsideClickDetector = (ref: RefObject<HTMLElement>, callback: Function, active: boolean): void => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			active && !ref.current?.contains(event.target as (Node | null)) && callback();
		};

		document.addEventListener("mousedown", handleClick);

		return () => document.removeEventListener("mousedown", handleClick);
	}, [ref, callback, active]);
};

export default useOutsideClickDetector;
