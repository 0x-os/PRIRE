import { VNode } from './VNode.d.ts';
import { RefObject } from './base.d.ts';
import { ComponentChildren } from './base.d.ts';

export function createRef<T = any>(): RefObject<T>;
export function toChildArray(
	children: ComponentChildren
): Array<VNode | string | number>;

export function isValidElement(vnode: any): vnode is VNode;
