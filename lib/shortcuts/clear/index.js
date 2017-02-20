import rmk from '~';
import rmkActions from '~/actions';

/**
 * Shortcut for clear object
 *
 * @memberof shortcuts
 * @param {Object} params Origin object
 * @returns {Function} Returns transformed object with snake_case keys
 * @see {@link actions.clear} Original method
 * @example
 *
 * import clear from 'rmk/shortcuts/clear';
 *
 * let data = {foo:null, bar: 0, baz:null}
 * clear(data)
 * // => {bar:0}
 */
const clear = (...params) => {
  return rmk(rmkActions.clear())(...params);
};

module.exports = clear;