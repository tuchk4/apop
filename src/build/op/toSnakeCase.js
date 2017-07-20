import action from '../../actions/object/toSnakeCase';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Transform Object Keys to snake_case
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#toSnakeCase|toSnakeCase action}
 *
 *  @example
 * import toSnakeCase from 'op/toSnakeCase';
 * toSnakeCase()(simpleData);
 * // => { a: "", b: 1, c_d: null, d_b:"undefined"}
 *
 * @example
 * op.toSnakeCase()(simpleData);
 * // => { a: "", b: 1, c_d: null, d_b:"undefined"}
 *
 */
const toSnakeCase = (...args) => apply(action(...args));
export default toSnakeCase;
