import rmk from '~';
import rmkActions from '~/actions';

/**
 * Function of converts object keys to camelCase.
 *
 * @memberof shortcuts
 * @param {Object} params Origin object
 * @returns {Function} Returns transformed object with snake_case keys
 * @see {@link actions.toCamelCase} Original method
 * @example
 *
 * import toCamelCase from 'rmk/shortcuts/toCamelCase';
 *
 * let data = {FooBar:1, foo_baz:2, bar:3, baz:4}
 * toCamelCase(data)
 * // => {fooBar:1, fooBaz:2, bar:3, baz:4}
 *
 */
const toCamelCase = (...params) => {
  return rmk(rmkActions.toCamelCase())(...params);
};

module.exports = toCamelCase;