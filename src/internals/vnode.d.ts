import * as prire from '../base-internals';
import { prireElement } from './other';

export interface VNode<P = {}> extends prire.VNode<P> {
	// Redefine type here using our internal ComponentType type
	type: string | ComponentType<P>;
	props: P & { children: ComponentChildren };
	ref?: Ref<any> | null;
	_children: Array<VNode<any>> | null;
	_parent: VNode | null;
	_depth: number | null;
	/**
	 * The [first (for Fragments)] DOM child of a VNode
	 */
	_dom: prireElement | null;
	/**
	 * The last dom child of a Fragment, or components that return a Fragment
	 */
	_nextDom: prireElement | null;
	_component: Component | null;
	_hydrating: boolean | null;
	constructor: undefined;
	_original: number;
}
