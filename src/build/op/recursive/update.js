import action from '../../../actions/object/update';
import recursiveApply from '../../../utils/apply/recursiveObject';

/**
 * @memberof op.recursive
 * @description Recursive update
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#update|update action}
 *
 *  @example
 * import update from 'apop/op/recursive/update';
 * update(updateKeys)(deepData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
 *
 * @example
 * opRecursive(op.update(updateKeys))(deepData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
 *
 * @example
 * op.recursive(op.update(updateKeys))(deepData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
 *
 * @example
 * import update from 'apop/op/update';
 * op.recursive(update(updateKeys))(deepData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
 */
const update = (...args) => recursiveApply(action(...args));
export default update;
