import action from '../../../actions/array/filter';
import recursiveApply from '../../../utils/apply/recursiveArray';

/**
 * @memberof ap.recursive
 * @description Recursive filter arrays
 * @param condition {Function} Filter condition
 * @return {Function}
 * @see {@link ARRAY_ACTIONS.md#filter|Filter action}
 *
 * @example
 * import filter from 'apop/ap/recursive/filter';
 * filter(filterCondition)(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 * @example
 * import clear from 'apop/op/clear';
 * apRecursive(filter(filterCondition))(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 ** @example
 * ap.recursive(op.filter(filterCondition))(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 *  @example
 *  import clear from 'apop/op/clear';
 *  ap.recursive(filter(filterCondition))(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 */
const filter = condition => recursiveApply(action(condition));

export default filter;
