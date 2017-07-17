import action from '../../../actions/object/clear';
import recursiveApply from '../../../utils/recursiveApply/object';

/**
 * @memberof op.recursive
 * @description Recursive clear
 * @param config
 * @return {Function}
 *
 *  @example
 *
 * // Variable to usages:
 *
 * import recursiveClear from 'op/recursive/clear';
 * import recursive from 'op/recursive';
 * import clear from 'op/clear';
 * import op from 'op';
 *
 * let data = {
 *  a: "",
 *  b : 1:
 *  c: null,
 *  d: undefined,
 *    deep: {
 *      g: null,
 *      h: true,
 *      moreDeep: {k: "", m:false}
 *    }
 *  };
 *
 * recursiveClear()(data)
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 * recursive(recursive.clear())(data)
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 * recursive(op.clear())
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 * recursive(clear())(data)
 * // => {b:1, deep: {h:true, moreDeep: {m: false}}}
 *
 */
const clear = config => recursiveApply(action(config));
export default clear;
