import eachKeys from '../../utils/eachKeys';

/**
 * Function parse each fields in Objects.
 *
 * @memberof rmk
 * @description By default action parse object.  For recursive flow use rmk.recursive(rmk.each(callback))(data)
 * @param {Function} callback Function for parse each field in object (key, value) => ({key: newKey, value: newValue})
 * @returns {Function} Returns function parse eachKeys
 * @example
 *
 * import rmk from 'rmk';
 *
 * let formula = rmk(rmk.each((key, value) => {
 *  return {key: key + '_', value: value * 2}
 * })
 * let data = {a:1, b: 2, c: 3, d: 4}
 * formula(data)
 * // or
 * rmk.clear()(data)
 * // => {a_: 2, b_: 4, c_: 6, d_: 8}
 *
 *
 *
 */
const each = callback => origin => eachKeys(origin, callback);
export default each;
