import each from '../object/each';
/**
 *
 * @description Parse object. Return (new key|new value) for (each key|value).
 * @param {Function} callback (key, value) => ({key: newKey, value: newValue})
 * @returns {MiddlewareObjectFunction}
 * @see {@link OBJECT_ACTIONS.md#each| Original each action}
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

export default each;
