// Virtual DOM

export interface VNode<P = {}> {
    type: ComponentType<P> string;
    props: P & { children, ComponentChildren };
    key: Key;
    ref?: Ref<any> | null;
    // Start time for the rendering of this vnode
    startTime?: number; // default: '0'
    // End time for the rendering of this vnode
    endTime?: number; // defualt: '-1'

}
