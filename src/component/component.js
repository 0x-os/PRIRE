/*
 * Base Component class. Provides `setState()` and `forceUpdate()`, which trigger rendering
 *
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components' getChildContext
 */
export function Component(props, context) {
	this.props = props;
	this.context = context;
}

/**
 * Update component state and schedule a re-render.
 *
 * @this {import('../internals/').Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state properties to update with new values or a function that given the current state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is updated
 */
Component.prototype.setState = function(update, callback) {
	let s;
	if (this._nextState != null && this._nextState !== this.state) {
		s = this._nextState;
	} else {
		s = this._nextState = assign({}, this.state);
	}

	if (typeof update == 'function') {
		update = update(assign({}, s), this.props);
	}

	if (update) {
		assign(s, update);
	}

	if (update == null) return;

	if (this._vnode) {
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	}
};

/**
 * Immediately perform a synchronous re-render of the component
 *
 * @this {import('../internals/').Component}
 * @param {() => void} [callback] A function to be called after component is re-rendered
 */
Component.prototype.forceUpdate = function(callback) {
	if (this._vnode) {
		this._force = true;
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	}
};

Component.prototype.render = Fragment;
