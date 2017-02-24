import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

/**
 * Function of converts object keys to camelCase.
 *
 * @memberof actions
 * @param {Object} config Default empty. No used in action.
 * @returns {Function} Returns function mutation object keys to camelCase
 * @see {@link ../shortcuts#shortcuts.toCamelCase Shortcut method}
 * @example
 *
 * import toCamelCase from 'rmk/actions/toCamelCase';
 *
 * let formula = rmk(toCamelCase())
 * let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
 * formula(data)
 * // => {fooBar:1, fooBar:2, bar:3, foo:4}
 *
 */
export default (config = {}) => object => {
  return mapKeys(object, (value, key) => camelCase(key));
};