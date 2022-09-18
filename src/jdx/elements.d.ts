import { Component, ComponentType, FunctionComponent } from '../base-internals/ComponentInterface';
import { VNode } from '../base-internals/VNode';

import { IntrinsicElements } from './intrinsicElements';

export type ElementType<P = any> =
	| {
			[K in keyof IntrinsicElements]: P extends IntrinsicElements[K]
				? K
				: never;
	  }[keyof IntrinsicElements]
	| ComponentType<P>;

export interface Element extends VNode<any> {}

export type ElementClass = Component<any, any> | FunctionComponent<any>;

export interface ElementAttributesProperty {
	props: any;
}

export interface ElementChildrenAttribute {
	children: any;
}