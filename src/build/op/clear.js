import action from '../../actions/object/clear';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Clear Object
 * @param config
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#clear|Clear action}
 *
 * @example
 * op.clear()(simpleData);
 * // => {b:1}
 *
 * @example
 * import clear from 'op/clear';
 * clear()(simpleData);
 * // => {b:1}
 *
 */
const clear = config => apply(action(config));
export default clear;
