import { VNode } from './VNode.d.ts';

export interface Options {
	/** Attach a hook that is invoked whenever a VNode is created. */
	vnode?(vnode: VNode): void;
    
	/** Attach a hook that is invoked immediately before a vnode is unmounted. */
	unmount?(vnode: VNode): void;
    
	/** Attach a hook that is invoked after a vnode has rendered. */
	diffed?(vnode: VNode): void;
	event?(e: Event): any;
	requestAnimationFrame?(callback: () => void): void;
	debounceRendering?(cb: () => void): void;
	useDebugValue?(value: string | number): void;
	_addHookName?(name: string | number): void;
	__suspenseDidResolve?(vnode: VNode, cb: () => void): void;
}

export const options: Options;
