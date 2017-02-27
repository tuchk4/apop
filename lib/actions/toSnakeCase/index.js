import snakeCase from 'lodash/snakeCase';
import mapKeys from 'lodash/mapKeys';

/**
 * Function of converts object keys to snake_case.
 *
 * @memberof actions
 * @returns {Function} Returns function mutation object keys to snake_case
 * @see {@link ../shortcuts#shortcuts.toSnakeCase Shortcut method}
 * @example
 *
 * import toSnakeCase from 'rmk/actions/toSnakeCase';
 *
 * let formula = rmk(toSnakeCase())
 * let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
 * formula(data)
 * // => {foo_bar:1, foo_bar:2, bar:3, foo:4}
 *
 */
export default () => object => mapKeys(object, (value, key) => snakeCase(key));
