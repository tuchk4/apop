import rmk from 'rmk';
import rmkActions from 'rmk/actions';

/**
 * Shortcut for clear object
 *
 * @memberof shortcuts
 * @param {Object} origin Origin object
 * @returns {Function} Returns transformed object with snake_case keys
 * @see {@link ../actions#actions.clear Original method}
 * @example
 *
 * import clear from 'rmk/shortcuts/clear';
 *
 * let data = {foo:null, bar: 0, baz:null}
 * clear(data)
 * // => {bar:0}
 */
export default (origin) => {
  return rmk(rmkActions.clear())(origin);
};