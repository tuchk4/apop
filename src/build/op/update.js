import action from '../../actions/object/update';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Update Object values
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#update|update action}
 *
 *  @example
 * import update from 'op/update';
 * update(updateKeys)(simpleData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined"}
 *
 * @example
 * op.update(updateKeys)(simpleData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined"}
 *
 */
const update = (...args) => apply(action(...args));
export default update;
