import action from '../../../actions/object/toCamelCase';
import recursiveApply from '../../../utils/recursiveApply/object';

/**
 * @memberof op.recursive
 * @description Recursive toCamelCase
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#toCamelCase|toCamelCase action}
 *
 *  @example
 * import toCamelCase from 'op/recursive/toCamelCase';
 * toCamelCase()(deepData);
 * // => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
 *
 * @example
 * opRecursive(op.toCamelCase())(deepData);
 * // => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
 *
 * @example
 * op.recursive(op.toCamelCase())(deepData);
 * // => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
 *
 * @example
 * import toCamelCase from 'op/toCamelCase';
 * op.recursive(toCamelCase())(deepData);
 *  // => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
 */
const toCamelCase = () => recursiveApply(action());
export default toCamelCase;
