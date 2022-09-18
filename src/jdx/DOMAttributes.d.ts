import { 
	GenericEventHandler,
	ClipboardEventHandler,
	CompositionEventHandler,
	FocusEventHandler,
	KeyboardEventHandler,
	MouseEventHandler,
	DragEventHandler,
	TouchEventHandler,
	PointerEventHandler,
	UIEventHandler,
	WheelEventHandler,
	AnimationEventHandler,
	TransitionEventHandler,
} from './eventHandlers';

export interface DOMAttributes<Target extends EventTarget> extends PreactDOMAttributes {
	// Image Events
	onLoad?: 			GenericEventHandler<Target>;
	onLoadCapture?: 	GenericEventHandler<Target>;
	onError?: 			GenericEventHandler<Target>;
	onErrorCapture?: 	GenericEventHandler<Target>;

	// Clipboard Events
	onCopy?: 			ClipboardEventHandler<Target>;
	onCopyCapture?: 	ClipboardEventHandler<Target>;
	onCut?: 			ClipboardEventHandler<Target>;
	onCutCapture?: 		ClipboardEventHandler<Target>;
	onPaste?: 			ClipboardEventHandler<Target>;
	onPasteCapture?: 	ClipboardEventHandler<Target>;

	// Composition Events
	onCompositionEnd?: 				CompositionEventHandler<Target>;
	onCompositionEndCapture?: 		CompositionEventHandler<Target>;
	onCompositionStart?: 			CompositionEventHandler<Target>;
	onCompositionStartCapture?: 	CompositionEventHandler<Target>;
	onCompositionUpdate?: 			CompositionEventHandler<Target>;
	onCompositionUpdateCapture?: 	CompositionEventHandler<Target>;

	// Details Events
	onToggle?: GenericEventHandler<Target>;

	// Focus Events
	onFocus?: 			FocusEventHandler<Target>;
	onFocusCapture?: 	FocusEventHandler<Target>;
	onfocusin?: 		FocusEventHandler<Target>;
	onfocusinCapture?: 	FocusEventHandler<Target>;
	onfocusout?: 		FocusEventHandler<Target>;
	onfocusoutCapture?: FocusEventHandler<Target>;
	onBlur?: 			FocusEventHandler<Target>;
	onBlurCapture?: 	FocusEventHandler<Target>;

	// Form Events
	onChange?: 				GenericEventHandler<Target>;
	onChangeCapture?: 		GenericEventHandler<Target>;
	onInput?: 				GenericEventHandler<Target>;
	onInputCapture?: 		GenericEventHandler<Target>;
	onBeforeInput?: 		GenericEventHandler<Target>;
	onBeforeInputCapture?: 	GenericEventHandler<Target>;
	onSearch?: 				GenericEventHandler<Target>;
	onSearchCapture?: 		GenericEventHandler<Target>;
	onSubmit?: 				GenericEventHandler<Target>;
	onSubmitCapture?: 		GenericEventHandler<Target>;
	onInvalid?: 			GenericEventHandler<Target>;
	onInvalidCapture?: 		GenericEventHandler<Target>;
	onReset?: 				GenericEventHandler<Target>;
	onResetCapture?: 		GenericEventHandler<Target>;
	onFormData?: 			GenericEventHandler<Target>;
	onFormDataCapture?: 	GenericEventHandler<Target>;

	// Keyboard Events
	onKeyDown?: 		KeyboardEventHandler<Target>;
	onKeyDownCapture?: 	KeyboardEventHandler<Target>;
	onKeyPress?: 		KeyboardEventHandler<Target>;
	onKeyPressCapture?: KeyboardEventHandler<Target>;
	onKeyUp?: 			KeyboardEventHandler<Target>;
	onKeyUpCapture?: 	KeyboardEventHandler<Target>;

	// Media Events
	onAbort?: 					GenericEventHandler<Target>;
	onAbortCapture?: 			GenericEventHandler<Target>;
	onCanPlay?: 				GenericEventHandler<Target>;
	onCanPlayCapture?: 			GenericEventHandler<Target>;
	onCanPlayThrough?: 			GenericEventHandler<Target>;
	onCanPlayThroughCapture?: 	GenericEventHandler<Target>;
	onDurationChange?: 			GenericEventHandler<Target>;
	onDurationChangeCapture?: 	GenericEventHandler<Target>;
	onEmptied?: 				GenericEventHandler<Target>;
	onEmptiedCapture?: 			GenericEventHandler<Target>;
	onEncrypted?: 				GenericEventHandler<Target>;
	onEncryptedCapture?: 		GenericEventHandler<Target>;
	onEnded?: 					GenericEventHandler<Target>;
	onEndedCapture?: 			GenericEventHandler<Target>;
	onLoadedData?: 				GenericEventHandler<Target>;
	onLoadedDataCapture?: 		GenericEventHandler<Target>;
	onLoadedMetadata?: 			GenericEventHandler<Target>;
	onLoadedMetadataCapture?: 	GenericEventHandler<Target>;
	onLoadStart?: 				GenericEventHandler<Target>;
	onLoadStartCapture?: 		GenericEventHandler<Target>;
	onPause?: 					GenericEventHandler<Target>;
	onPauseCapture?: 			GenericEventHandler<Target>;
	onPlay?: 					GenericEventHandler<Target>;
	onPlayCapture?: 			GenericEventHandler<Target>;
	onPlaying?: 				GenericEventHandler<Target>;
	onPlayingCapture?: 			GenericEventHandler<Target>;
	onProgress?: 				GenericEventHandler<Target>;
	onProgressCapture?: 		GenericEventHandler<Target>;
	onRateChange?: 				GenericEventHandler<Target>;
	onRateChangeCapture?: 		GenericEventHandler<Target>;
	onSeeked?: 					GenericEventHandler<Target>;
	onSeekedCapture?: 			GenericEventHandler<Target>;
	onSeeking?: 				GenericEventHandler<Target>;
	onSeekingCapture?: 			GenericEventHandler<Target>;
	onStalled?: 				GenericEventHandler<Target>;
	onStalledCapture?: 			GenericEventHandler<Target>;
	onSuspend?: 				GenericEventHandler<Target>;
	onSuspendCapture?: 			GenericEventHandler<Target>;
	onTimeUpdate?: 				GenericEventHandler<Target>;
	onTimeUpdateCapture?: 		GenericEventHandler<Target>;
	onVolumeChange?: 			GenericEventHandler<Target>;
	onVolumeChangeCapture?: 	GenericEventHandler<Target>;
	onWaiting?: 				GenericEventHandler<Target>;
	onWaitingCapture?: 			GenericEventHandler<Target>;

	// MouseEvents
	onClick?: 				MouseEventHandler<Target>;
	onClickCapture?: 		MouseEventHandler<Target>;
	onContextMenu?: 		MouseEventHandler<Target>;
	onContextMenuCapture?: 	MouseEventHandler<Target>;
	onDblClick?: 			MouseEventHandler<Target>;
	onDblClickCapture?: 	MouseEventHandler<Target>;
	onDrag?: 				DragEventHandler<Target>;
	onDragCapture?: 		DragEventHandler<Target>;
	onDragEnd?: 			DragEventHandler<Target>;
	onDragEndCapture?: 		DragEventHandler<Target>;
	onDragEnter?: 			DragEventHandler<Target>;
	onDragEnterCapture?: 	DragEventHandler<Target>;
	onDragExit?: 			DragEventHandler<Target>;
	onDragExitCapture?: 	DragEventHandler<Target>;
	onDragLeave?: 			DragEventHandler<Target>;
	onDragLeaveCapture?: 	DragEventHandler<Target>;
	onDragOver?: 			DragEventHandler<Target>;
	onDragOverCapture?: 	DragEventHandler<Target>;
	onDragStart?: 			DragEventHandler<Target>;
	onDragStartCapture?: 	DragEventHandler<Target>;
	onDrop?: 				DragEventHandler<Target>;
	onDropCapture?: 		DragEventHandler<Target>;
	onMouseDown?: 			MouseEventHandler<Target>;
	onMouseDownCapture?: 	MouseEventHandler<Target>;
	onMouseEnter?: 			MouseEventHandler<Target>;
	onMouseEnterCapture?: 	MouseEventHandler<Target>;
	onMouseLeave?: 			MouseEventHandler<Target>;
	onMouseLeaveCapture?: 	MouseEventHandler<Target>;
	onMouseMove?: 			MouseEventHandler<Target>;
	onMouseMoveCapture?: 	MouseEventHandler<Target>;
	onMouseOut?: 			MouseEventHandler<Target>;
	onMouseOutCapture?: 	MouseEventHandler<Target>;
	onMouseOver?: 			MouseEventHandler<Target>;
	onMouseOverCapture?: 	MouseEventHandler<Target>;
	onMouseUp?: 			MouseEventHandler<Target>;
	onMouseUpCapture?: 		MouseEventHandler<Target>;

	// Selection Events
	onSelect?: 			GenericEventHandler<Target>;
	onSelectCapture?: 	GenericEventHandler<Target>;

	// Touch Events
	onTouchCancel?: 		TouchEventHandler<Target>;
	onTouchCancelCapture?: 	TouchEventHandler<Target>;
	onTouchEnd?: 			TouchEventHandler<Target>;
	onTouchEndCapture?: 	TouchEventHandler<Target>;
	onTouchMove?: 			TouchEventHandler<Target>;
	onTouchMoveCapture?: 	TouchEventHandler<Target>;
	onTouchStart?: 			TouchEventHandler<Target>;
	onTouchStartCapture?: 	TouchEventHandler<Target>;

	// Pointer Events
	onPointerOver?: 				PointerEventHandler<Target>;
	onPointerOverCapture?: 			PointerEventHandler<Target>;
	onPointerEnter?: 				PointerEventHandler<Target>;
	onPointerEnterCapture?: 		PointerEventHandler<Target>;
	onPointerDown?: 				PointerEventHandler<Target>;
	onPointerDownCapture?: 			PointerEventHandler<Target>;
	onPointerMove?: 				PointerEventHandler<Target>;
	onPointerMoveCapture?: 			PointerEventHandler<Target>;
	onPointerUp?: 					PointerEventHandler<Target>;
	onPointerUpCapture?: 			PointerEventHandler<Target>;
	onPointerCancel?: 				PointerEventHandler<Target>;
	onPointerCancelCapture?: 		PointerEventHandler<Target>;
	onPointerOut?: 					PointerEventHandler<Target>;
	onPointerOutCapture?: 			PointerEventHandler<Target>;
	onPointerLeave?: 				PointerEventHandler<Target>;
	onPointerLeaveCapture?: 		PointerEventHandler<Target>;
	onGotPointerCapture?: 			PointerEventHandler<Target>;
	onGotPointerCaptureCapture?: 	PointerEventHandler<Target>;
	onLostPointerCapture?: 			PointerEventHandler<Target>;
	onLostPointerCaptureCapture?: 	PointerEventHandler<Target>;

	// UI Events
	onScroll?: 			UIEventHandler<Target>;
	onScrollCapture?: 	UIEventHandler<Target>;

	// Wheel Events
	onWheel?: WheelEventHandler<Target>;
	onWheelCapture?: WheelEventHandler<Target>;

	// Animation Events
	onAnimationStart?: 				AnimationEventHandler<Target>;
	onAnimationStartCapture?: 		AnimationEventHandler<Target>;
	onAnimationEnd?: 				AnimationEventHandler<Target>;
	onAnimationEndCapture?: 		AnimationEventHandler<Target>;
	onAnimationIteration?: 			AnimationEventHandler<Target>;
	onAnimationIterationCapture?: 	AnimationEventHandler<Target>;

	// Transition Events
	onTransitionEnd?: 			TransitionEventHandler<Target>;
	onTransitionEndCapture?: 	TransitionEventHandler<Target>;
}