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
