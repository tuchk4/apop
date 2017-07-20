import action from '../../../actions/object/toSnakeCase';
import recursiveApply from '../../../utils/recursiveApply/object';

/**
 * @memberof op.recursive
 * @description Recursive toSnakeCase
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#toSnakeCase|toSnakeCase action}
 *
 *  @example
 * import toSnakeCase from 'op/recursive/toSnakeCase';
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
 * import toSnakeCase from 'op/toSnakeCase';
 * op.recursive(toSnakeCase())(deepData);
 *  // => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
 */
const toSnakeCase = () => recursiveApply(action());
export default toSnakeCase;
