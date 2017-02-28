import rmk from '../../';
import rmkActions from '../../actions';

/**
 * Function of converts object keys to snake_case.
 *
 * @memberof shortcuts
 * @param {Object} origin Origin object
 * @returns {Function} Returns transformed object with snake_case keys
 * @see {@link ../actions#actions.toCamelCase Original method}
 * @example
 *
 * import toCamelCase from 'rmk/shortcuts/toSnakeCase';
 *
 * let data = {fooBar:1, foo_baz:2, bar:3, Baz:4}
 * toSnakeCase(data)
 * // => {foo_bar:1, foo_baz:2, bar:3, baz:4}
 *
 */
const toSnakeCase = origin => rmk(rmkActions.toSnakeCase())(origin);
export default toSnakeCase;
