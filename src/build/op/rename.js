import action from '../../actions/object/rename';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Rename Object Keys
 * @param config {Object}
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#rename|Rename action}
 *
 *  @example
 * import rename from 'apop/op/rename';
 * rename(renameKeys)(simpleData);
 * // => { "1_object": "", newB: 1, c_d: null, dB:"undefined"}
 *
 * @example
 * op.rename(renameKeys)(simpleData);
 * // => { "1_object": "", newB: 1, c_d: null, dB:"undefined"}
 *
 */
const rename = config => apply(action(config));
export default rename;
