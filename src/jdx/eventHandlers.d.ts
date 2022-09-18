import { 
	TargetedEvent, 
	TargetedAnimationEvent,
	TargetedClipboardEvent,
	TargetedCompositionEvent,
	TargetedDragEvent,
	TargetedFocusEvent,
	TargetedKeyboardEvent,
	TargetedMouseEvent,
	TargetedPointerEvent,
	TargetedTouchEvent,
	TargetedTransitionEvent,
	TargetedUIEvent,
	TargetedWheelEvent,
} from './targetedEvents';

export interface EventHandler<E extends TargetedEvent> {
	(this: never, event: E): void;
}

export type AnimationEventHandler<Target extends EventTarget> = EventHandler<TargetedAnimationEvent<Target>>;

export type ClipboardEventHandler<Target extends EventTarget> = EventHandler<TargetedClipboardEvent<Target>>;

export type CompositionEventHandler<Target extends EventTarget> = EventHandler<TargetedCompositionEvent<Target>>;

export type DragEventHandler<Target extends EventTarget> = EventHandler<TargetedDragEvent<Target>>;

export type FocusEventHandler<Target extends EventTarget> = EventHandler<TargetedFocusEvent<Target>>;

export type GenericEventHandler<Target extends EventTarget> = EventHandler<TargetedEvent<Target>>;

export type KeyboardEventHandler<Target extends EventTarget> = EventHandler<TargetedKeyboardEvent<Target>>;

export type MouseEventHandler<Target extends EventTarget> = EventHandler<TargetedMouseEvent<Target>>;

export type PointerEventHandler<Target extends EventTarget> = EventHandler<TargetedPointerEvent<Target>>;

export type TouchEventHandler<Target extends EventTarget> = EventHandler<TargetedTouchEvent<Target>\>;

export type TransitionEventHandler<Target extends EventTarget> = EventHandler<TargetedTransitionEvent<Target>>;

export type UIEventHandler<Target extends EventTarget> = EventHandler<TargetedUIEvent<Target>>;

export type WheelEventHandler<Target extends EventTarget> = EventHandler<TargetedWheelEvent<Target>>;