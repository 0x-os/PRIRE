import * as prire from '../base-internals/index';
import { prireContext, prireElement } from './other';

export type ComponentChild =
	| VNode<any>
	| string
	| number
	| boolean
	| null
	| undefined;

export type ComponentChildren = ComponentChild[] | ComponentChild;

export interface FunctionComponent<P = {}> extends prire.FunctionComponent<P> {
	contextType?: prireContext;
	_contextRef?: prireContext;
	getDerivedStateFromProps?: undefined;
	getDerivedStateFromError?: undefined;
}

export interface ComponentClass<P = {}> extends prire.ComponentClass<P> {
	_contextRef?: any;
	contextType?: prireContext;
}

export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

export interface Component<P = {}, S = {}> extends prire.Component<P, S> {
	constructor: ComponentType<P>;
	state: S;
	base?: prireElement;

	_dirty: boolean;
	_force?: boolean;
	_renderCallbacks: Array<() => void>;
	_globalContext?: any;
	_vnode?: VNode<P> | null;
	_nextState?: S | null;
	_prevState?: S | null;
	_parentDom?: prireElement | null;
	_processingException?: Component<any, any> | null;
	_pendingError?: Component<any, any> | null;
}
