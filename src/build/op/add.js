import action from '../../actions/object/add';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description add Object values
 * @return {Function}
 * @see {@link OBJECT_ACTIONS.md#add|add action}
 *
 *  @example
 * import add from 'apop/op/add';
 * add(addKeys)(simpleData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined"}
 *
 * @example
 * op.add(addKeys)(simpleData);
 * // => { a: "1_object", b: "newB", c_d: null, dB:"undefined"}
 *
 */
const add = (...args) => apply(action(...args));
export default add;
