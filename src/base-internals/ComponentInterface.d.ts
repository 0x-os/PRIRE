import { VNode } from './VNode';
import { RenderableProps, ErrorInfo } from './base';
import { JSXInternal } from './jsx';

// Component Interface

export import JSX = JSXInternal;

export type ComponentChild = VNode<any> | string | number | bigint | boolean | object | undefined | null;
export type ComponentChildren = ComponentChild[] | ComponentChild;
export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
export type ComponentFactory<P = {}> = ComponentType<P>;
export type ComponentProps<C extends ComponentType<any> | keyof JSXInternal.IntrinsicElements> = C extends ComponentType<infer P> ? P : C extends keyof JSXInternal.IntrinsicElements ? JSXInternal.IntrinsicElements[C] : never;
export type AnyComponent<P = {}, S = {}> = FunctionComponent<P> | Component<P, S>;

export interface FunctionComponent<P = {}> {
    (props: RenderableProps<P> , context?: any) VNode<any> | null;
    displayName?: string;
    defaultProps?: Partial<P>;
}

export interface FunctionalComponent<P = {}> extends FunctionComponent<P> {}

export interface ComponentClass<P = {}, S = {}> {
    new (props: P, context?: any ): Component<P, S>;
    displayName?: string;
    defaultProps?: Partial<P>;
    contextType?: Context<any>;
    getDerivedStateFromProps?(props: Readonly<P>, state: Readonly<S>): Partial<S> | null;
}

export interface ComponentConstructor<P = {}, S = {}> extends ComponentClass<P, S> {}

export interface Component<P = {}, S = {}> {
    componentWillMount?(): void;
    componentDidMount?(): void;
    componentWillUnmount?(): void;
    getChildContext?(): object;
    componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
    componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    getSnapshotBeforeUpdate?(oldProps: Readonly<P>, oldState: Readonly<S>): any;
    componentDidUpdate?(previousProps: Readonly<P>, previousState: Readonly<S>, snapshot: any): void;
    componentDidCatch?(error: any; errorInfo: ErrorInfo): void;
}

export abstract class Component<P, S> {
    constructor(props?: P, context?: any);

    static displayName?: string;
    static defaultProps?: any;
    static contextType?: Context<any>;

    static getDerivedStateFromProps?(props: Readonly<object>, state: Readonly<object>): object | null;
    static getDerivedStateFromError?(error: any): object | null;

    props: RenderableProps<P>;
    state: Readonly<S>;
    context: any;
    base?: Element | Text;

    setState<K extends keyof S>(
        state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | Partial<S> | null) | Pick<S, K> | Partial<S> | null,
        callback?: () => void
    ): void;

    forceUpdate(callback?: () => void): void;

    abstract render(props?: RenderableProps<P>, state?: Readonly<S>, context?: any): ComponentChild;
}
