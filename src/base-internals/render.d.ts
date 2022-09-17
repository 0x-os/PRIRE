import { VNode } from './VNode.d.ts';
import { ComponentChild, ComponentChildren } from './ComponentInterface.d.ts';

export function render(
	vnode: ComponentChild,
	parent: Element | Document | ShadowRoot | DocumentFragment
): void;

export function render(
	vnode: ComponentChild,
	parent: Element | Document | ShadowRoot | DocumentFragment,
	replaceNode?: Element | Text
): void;

export function hydrate(
	vnode: ComponentChild,
	parent: Element | Document | ShadowRoot | DocumentFragment
): void;

export function cloneElement(
	vnode: VNode<any>,
	props?: any,
	...children: ComponentChildren[]
): VNode<any>;

export function cloneElement<P>(
	vnode: VNode<P>,
	props?: any,
	...children: ComponentChildren[]
): VNode<P>;
