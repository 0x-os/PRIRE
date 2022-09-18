import { ClassAttributes } from '../base-internals';
import { DOMAttributes } from './DOMAttributes';

export interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends ClassAttributes<RefType>, DOMAttributes<RefType> {
	// Standard HTML Attributes
	accept?: 				string;
	acceptCharset?: 		string;
	accessKey?: 			string;
	action?: 				string;
	allow?: 				string;
	allowFullScreen?: 		boolean;
	allowTransparency?: 	boolean;
	alt?: 					string;
	as?: 					string;
	async?: 				boolean;
	autocomplete?: 			string;
	autoComplete?: 			string;
	autocorrect?: 			string;
	autoCorrect?: 			string;
	autofocus?: 			boolean;
	autoFocus?: 			boolean;
	autoPlay?: 				boolean;
	capture?: 				boolean | string;
	cellPadding?: 			number | string;
	cellSpacing?: 			number | string;
	charSet?: 				string;
	challenge?: 			string;
	checked?: 				boolean;
	cite?: 					string;
	class?: 				string | undefined;
	className?: 			string | undefined;
	cols?: 					number;
	colSpan?: 				number;
	content?: 				string;
	contentEditable?: 		boolean;
	contextMenu?: 			string;
	controls?: 				boolean;
	controlsList?: 			string;
	coords?: 				string;
	crossOrigin?: 			string;
	data?: 					string;
	dateTime?: 				string;
	default?: 				boolean;
	defaultChecked?: 		boolean;
	defaultValue?: 			string;
	defer?: 				boolean;
	dir?: 					'auto' | 'rtl' | 'ltr';
	disabled?: 				boolean;
	disableRemotePlayback?: boolean;
	download?: 				any;
	decoding?: 				'sync' | 'async' | 'auto';
	draggable?: 			boolean;
	encType?: 				string;
	enterkeyhint?: 			'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
	form?: 					string;
	formAction?: 			string;
	formEncType?: 			string;
	formMethod?: 			string;
	formNoValidate?: 		boolean;
	formTarget?: 			string;
	frameBorder?: 			number | string;
	headers?: 				string;
	height?: 				number | string;
	hidden?: 				boolean;
	high?: 					number;
	href?: 					string;
	hrefLang?: 				string;
	for?: 					string;
	htmlFor?: 				string;
	httpEquiv?: 			string;
	icon?: 					string;
	id?: 					string;
	inputMode?: 			string;
	integrity?: 			string;
	is?: 					string;
	keyParams?: 			string;
	keyType?: 				string;
	kind?: 					string;
	label?: 				string;
	lang?: 					string;
	list?: 					string;
	loading?: 				'eager' | 'lazy';
	loop?: 					boolean;
	low?: 					number;
	manifest?: 				string;
	marginHeight?: 			number;
	marginWidth?: 			number;
	max?: 					number | string;
	maxLength?: 			number;
	media?: 				string;
	mediaGroup?: 			string;
	method?: 				string;
	min?: 					number | string;
	minLength?: 			number;
	multiple?: 				boolean;
	muted?: 				boolean;
	name?: 					string;
	nomodule?: 				boolean;
	nonce?: 				string;
	noValidate?: 			boolean;
	open?: 					boolean;
	optimum?: 				number;
	part?: 					string;
	pattern?: 				string;
	ping?: 					string;
	placeholder?: 			string;
	playsInline?: 			boolean;
	poster?: 				string;
	preload?: 				string;
	radioGroup?: 			string;
	readonly?: 				boolean;
	readOnly?: 				boolean;
	referrerpolicy?: 		'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
	rel?: 					string;
	required?: 				boolean;
	reversed?: 				boolean;
	role?: 					string;
	rows?: 					number;
	rowSpan?: 				number;
	sandbox?: 				string;
	scope?: 				string;
	scoped?: 				boolean;
	scrolling?: 			string;
	seamless?: 				boolean;
	selected?: 				boolean;
	shape?: 				string;
	size?: 					number;
	sizes?: 				string;
	slot?: 					string;
	span?: 					number;
	spellcheck?: 			boolean;
	spellCheck?: 			boolean;
	src?: 					string;
	srcset?: 				string;
	srcDoc?: 				string;
	srcLang?: 				string;
	srcSet?: 				string;
	start?: 				number;
	step?: 					number | string;
	style?: 				string | CSSProperties;
	summary?: 				string;
	tabIndex?: 				number;
	target?: 				string;
	title?: 				string;
	type?: 					string;
	useMap?: 				string;
	value?: 				string | string[] | number;
	volume?: 				string | number;
	width?: 				number | string;
	wmode?: 				string;
	wrap?: 					string;

	// Non-standard Attributes
	autocapitalize?: 			'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
	autoCapitalize?: 			'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
	disablePictureInPicture?: 	boolean;
	results?: 					number;
	translate?: 				'yes' | 'no';

	// RDFa Attributes
	about?: 	string;
	datatype?: 	string;
	inlist?: 	any;
	prefix?: 	string;
	property?: 	string;
	resource?: 	string;
	typeof?: 	string;
	vocab?: 	string;

	// Microdata Attributes
	itemProp?: 	string;
	itemScope?: boolean;
	itemType?: 	string;
	itemID?: 	string;
	itemRef?: 	string;
}

export type DetailedHTMLProps<HA extends HTMLAttributes<RefType>, RefType extends EventTarget = EventTarget> = HA;

export interface HTMLMarqueeElement extends HTMLElement {
	behavior?: 		'scroll' | 'slide' | 'alternate';
	bgColor?: 		string;
	direction?: 	'left' | 'right' | 'up' | 'down';
	height?: 		number | string;
	hspace?: 		number | string;
	loop?: 			number | string;
	scrollAmount?: 	number | string;
	scrollDelay?: 	number | string;
	trueSpeed?: 	boolean;
	vspace?: 		number | string;
	width?: 		number | string;
}