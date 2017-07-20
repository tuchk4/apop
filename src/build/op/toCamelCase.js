import action from '../../actions/object/toCamelCase';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Transform Object Keys to CamelCase
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#toCamelCase|toCamelCase action}
 *
 *  @example
 * import toCamelCase from 'apop/op/toCamelCase';
 * toCamelCase()(simpleData);
 * // => { a: "", b: 1, cD: null, dB:"undefined"}
 *
 * @example
 * op.toCamelCase()(simpleData);
 * // => { a: "", b: 1, cD: null, dB:"undefined"}
 *
 */
const toCamelCase = (...args) => apply(action(...args));
export default toCamelCase;
