import action from '../../actions/object/clear';
import apply from '../../utils/apply/object';
/**
 * @memberof op
 * @description Test
 * @param args
 */
const clear = (...args) => apply(action(...args));
export default clear;
