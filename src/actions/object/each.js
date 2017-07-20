import eachKeys from '../../utils/eachKeys';
import wrapper from '../../utils/wrapper';

/**
 *
 * @description Parse object. Return (new key|new value) for (each key|value).
 * @param {Function} callback (key, value) => ({key: newKey, value: newValue})
 * @returns {MiddlewareObjectFunction}
 * @see {@link OP.md#op.each|op.each}
 * @see {@link OP.md#op.recursive.each|op.recursive.each}
 * @example
 *
 * import each from 'apop/op/each';
 *
 * op.each((key, value) => {
 *  return {key: key + '_', value: value * 2}
 * })({a:1, b: 2, c: 3, d: 4})
 * // => {a_: 2, b_: 4, c_: 6, d_: 8}
 *
 */
const each = callback => origin => eachKeys(origin, callback);

export default wrapper(each);
