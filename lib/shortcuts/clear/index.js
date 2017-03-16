import rmk from '../../';

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
const clear = origin => rmk(rmk.clear())(origin);
export default clear;
