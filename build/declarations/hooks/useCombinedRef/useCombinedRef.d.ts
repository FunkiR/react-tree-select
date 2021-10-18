import { Ref, RefObject } from 'react';
export declare const useCombinedRef: <T>(targetRef: Ref<T>, innerRef: RefObject<T>) => RefObject<T>;
export default useCombinedRef;
