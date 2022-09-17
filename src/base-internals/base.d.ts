import { ComponentChildren } from './ComponentInterface';

export type Key = string | number | any;
export type RefObject<T> = { current: T | null };
export type RefCallback<T> = ( instance: T | null ) => null;
export type Ref<T> = RefObject<T> | RefCallback<T>;

export interface Attributes {
    key?: Key;
    jsx?: boolean;
}

export interface ClassAttributes<T> extends Attributes {
    ref?: Ref<T>;
}

export interface ErrorInfo {
    componentStack?: string;
}

export type RenderableProps<P, RefType = any> = P & Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<RefType> }>;

export interface prireDOMAttributes {
    children?: ComponentChildren;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}

export const Fragment: FunctionComponent<{}>;
