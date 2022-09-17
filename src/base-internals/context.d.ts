import { ComponentChildren, FunctionComponent } from '@/';

export interface Consumer<T>
	extends FunctionComponent<{
		children: (value: T) => ComponentChildren;
	}> {}
    
export interface prireConsumer<T> extends Consumer<T> {}

export interface Provider<T>
	extends FunctionComponent<{
		value: T;
		children: ComponentChildren;
	}> {}
export interface prireProvider<T> extends Provider<T> {}
export type ContextType<C extends Context<any>> = C extends Context<infer T>
	? T
	: never;

export interface Context<T> {
	Consumer: Consumer<T>;
	Provider: Provider<T>;
	displayName?: string;
}
export interface prireContext<T> extends Context<T> {}

export function createContext<T>(defaultValue: T): Context<T>;

