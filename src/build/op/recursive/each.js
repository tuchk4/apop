import action from '../../../actions/object/each';
import recursiveApply from '../../../utils/recursiveApply/object';

/**
 * @memberof op.recursive
 * @description Recursive each key|value.
 * @param callback {Function} Function (key,value) => {key: new Key, value: newValue}
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#each|Each action}
 *
 * @example
 * import each from 'op/recursive/each';
 * each(eachRename)(deepData);
 * // => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
 *
 * @example
 * opRecursive(op.each(eachRename))(deepData);
 * // => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
 *
 * @example
 * op.recursive(op.each(eachRename))(deepData);
 * // => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
 *
 * @example
 * import each from 'op/each';
 * op.recursive(each(eachRename))(deepData);
 * // => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
 *
 */
const each = callback => recursiveApply(action(callback));
export default each;
