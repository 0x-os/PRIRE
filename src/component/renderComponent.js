/**
 * Trigger in-place re-rendering of a component.
 *
 * @param {import('../internals/').component} component The component to rerender
 */
function renderComponent(component) {
	let vnode = component._vnode,
		oldDom = vnode._dom,
		parentDom = component._parentDom;

	if (parentDom) {
		let commitQueue = [];
		const oldVNode = assign({}, vnode);
		oldVNode._original = vnode._original + 1;

		diff(
			parentDom,
			vnode,
			oldVNode,
			component._globalContext,
			parentDom.ownerSVGElement !== undefined,
			vnode._hydrating != null ? [oldDom] : null,
			commitQueue,
			oldDom == null ? getDomSibling(vnode) : oldDom,
			vnode._hydrating
		);
		commitRoot(commitQueue, vnode);

		if (vnode._dom != oldDom) {
			updateParentDomPointers(vnode);
		}
	}
}
