import { VNode } from './VNode.d.ts';
import { ClassAttributes } from './base.d.ts';
import { ComponentChildren, ComponentType } from './ComponentInterface.d.ts';

export function createElement(
	type: 'input',
	props:
		| (JSXInternal.DOMAttributes<HTMLInputElement> &
				ClassAttributes<HTMLInputElement>)
		| null,
	...children: ComponentChildren[]
): VNode<any>;

export function createElement<
	P extends JSXInternal.HTMLAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<any>;

export function createElement<
	P extends JSXInternal.SVGAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<any>;

export function createElement<T extends HTMLElement>(
	type: string,
	props:
		| (ClassAttributes<T> &
				JSXInternal.HTMLAttributes &
				JSXInternal.SVGAttributes)
		| null,
	...children: ComponentChildren[]
): VNode<any>;

export function createElement<P>(
	type: ComponentType<P>,
	props: (Attributes & P) | null,
	...children: ComponentChildren[]
): VNode<any>;

export namespace createElement {
	export import JSX = JSXInternal;
}

export function h(
	type: 'input',
	props:
		| (JSXInternal.DOMAttributes<HTMLInputElement> &
				ClassAttributes<HTMLInputElement>)
		| null,
	...children: ComponentChildren[]
): VNode<any>;

export function h<
	P extends JSXInternal.HTMLAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<any>;

export function h<
	P extends JSXInternal.SVGAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<any>;

export function h<T extends HTMLElement>(
	type: string,
	props:
		| (ClassAttributes<T> &
				JSXInternal.HTMLAttributes &
				JSXInternal.SVGAttributes)
		| null,
	...children: ComponentChildren[]
): VNode<any>;

export function h<P>(
	type: ComponentType<P>,
	props: (Attributes & P) | null,
	...children: ComponentChildren[]
): VNode<any>;

export namespace h {
	export import JSX = JSXInternal;
}
