import action from '../../../actions/object/toSnakeCase';
import recursiveApply from '../../../utils/apply/recursiveObject';

/**
 * @memberof op.recursive
 * @description Recursive toSnakeCase
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#toSnakeCase|toSnakeCase action}
 *
 *  @example
 * import toSnakeCase from 'apop/op/recursive/toSnakeCase';
 * toSnakeCase()(deepData);
 * // => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
 *
 * @example
 * opRecursive(op.toSnakeCase())(deepData);
 * // => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
 *
 * @example
 * op.recursive(op.toSnakeCase())(deepData);
 * // => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
 *
 * @example
 * import toSnakeCase from 'apop/op/toSnakeCase';
 * op.recursive(toSnakeCase())(deepData);
 *  // => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
 */
const toSnakeCase = () => recursiveApply(action());
export default toSnakeCase;
