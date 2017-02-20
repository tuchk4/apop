import snakeCase from 'lodash/snakeCase';
import mapKeys from 'lodash/mapKeys';

/**
 * Function of converts object keys to snake_case.
 *
 * @memberof actions
 * @param {Object} config Default empty. No used in action.
 * @returns {Function} Returns function mutation object keys to snake_case
 * @see {@link shortcuts.toSnakeCase} Shortcut method
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
const toSnakeCase = (config = {}) => object => {
  return mapKeys(object, (value, key) => snakeCase(key));
};
module.exports = toSnakeCase;