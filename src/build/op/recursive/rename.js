import action from '../../../actions/object/rename';
import recursiveApply from '../../../utils/recursiveApply/object';

/**
 * @memberof op.recursive
 * @description Recursive rename Object Keys
 * @param config {Object}
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#rename|Rename action}
 *
 *  @example
 * import rename from 'op/recursive/rename';
 * rename(renameKeys)(deepData);
 * // => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
 *
 * @example
 * opRecursive(op.rename(renameKeys))(deepData);
 * // => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
 *
 * @example
 * op.recursive(op.rename(renameKeys))(deepData);
 * // => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
 *
 * @example
 * import rename from 'op/rename';
 * op.recursive(rename(renameKeys))(deepData);
 *  // => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
 */
const rename = config => recursiveApply(action(config));
export default rename;
