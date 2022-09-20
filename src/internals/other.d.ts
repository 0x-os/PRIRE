import * as prire from '../base-internals/index';

type RefObject<T> = { current: T | null };
type RefCallback<T> = { (instance: T | null): void; current: undefined };
type Ref<T> = RefObject<T> | RefCallback<T>;

export interface DevSource {
	fileName: string;
	lineNumber: number;
}

export interface ErrorInfo {
	componentStack?: string;
}

export interface prireContext extends prire.Context<any> {
	_id: string;
	_defaultValue: any;
}

export interface prireElement extends HTMLElement {
	_children?: VNode<any> | null;
	_listeners?: Record<string, (e: Event) => void>;
	ownerSVGElement?: SVGElement | null;
	data?: string | number; // From Text node
}
