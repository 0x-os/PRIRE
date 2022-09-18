import { Component } from '../base-internals/ComponentInterface';

type Defaultize<Props, Defaults> =
	Props extends any 
		? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> & Pick<Props, Exclude<keyof Props, keyof Defaults>>
		: never;

export type LibraryManagedAttributes<Component, Props> = Component extends {
	defaultProps: infer Defaults;
}
	? Defaultize<Props, Defaults>
	: Props;

export interface PathAttributes {
	d: string;
}