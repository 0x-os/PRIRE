import * from '../base-internals';

export interface Options extends prire.Options {
	_root?(
		vnode: ComponentChild,
		parent: Element | Document | ShadowRoot | DocumentFragment
	): void;
	_diff?(vnode: VNode): void;
	_commit?(vnode: VNode, commitQueue: Component[]): void;
	_render?(vnode: VNode): void;
	_hook?(component: Component, index: number, type: HookType): void;
	_skipEffects?: boolean;
	_catchError(
		error: any,
		vnode: VNode,
		oldVNode: VNode | undefined,
		errorInfo: ErrorInfo | undefined
	): void;
}
