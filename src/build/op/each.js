import action from '../../actions/object/each';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Modify each key|value.
 * @param callback {Function} Function (key,value) => {key: new Key, value: newValue}
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#each|Each action}
 *
 * @example
 * import each from 'op/each';
 * each(eachTypeOf)(simpleData);
 * // => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {g:null: h:true, _moreDeep: {k: "", m:false}} }
 *
 * @example
 * op.each(eachTypeOf)(simpleData);
 * // => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {g:null: h:true, _moreDeep: {k: "", m:false}} }
 *
 */
const each = callback => apply(action(callback));
export default each;
