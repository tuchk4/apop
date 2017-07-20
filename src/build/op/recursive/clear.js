import action from '../../../actions/object/clear';
import recursiveApply from '../../../utils/apply/recursiveObject';

/**
 * @memberof op.recursive
 * @description Recursive clear
 * @param config
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#clear|Clear action}
 *
 * @example
 * import clear from 'apop/op/recursive/clear';
 * clear()(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 * @example
 * import clear from 'apop/op/clear';
 * opRecursive(clear())(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 ** @example
 * op.recursive(op.clear())(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 *  @example
 *  import clear from 'apop/op/clear';
 *  op.recursive(clear())(deepData);
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 */
const clear = config => recursiveApply(action(config));
export default clear;
