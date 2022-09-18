export type DOMCSSProperties = {
	[key in keyof Omit<
		CSSStyleDeclaration,
		| 'item'
		| 'setProperty'
		| 'removeProperty'
		| 'getPropertyValue'
		| 'getPropertyPriority'
	>]?: string | number | null | undefined;
};
export type AllCSSProperties = {
	[key: string]: string | number | null | undefined;
};
export interface CSSProperties extends AllCSSProperties, DOMCSSProperties {
	cssText?: string | null;
}