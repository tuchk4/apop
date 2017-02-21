import rmk from '~';
import rmkActions from '~/actions';

/**
 * Shortcut for clear object
 *
 * @memberof shortcuts
 * @param {Object} origin Origin object
 * @returns {Function} Returns transformed object with snake_case keys
 * @example
 *
 * import clear from 'rmk/shortcuts/clear';
 *
 * let data = {foo:null, bar: 0, baz:null}
 * clear(data)
 * // => {bar:0}
 */
const clear = (origin) => {
  return rmk(rmkActions.clear())(origin);
};

module.exports = clear;