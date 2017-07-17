import action from '../../actions/object/clear';
import apply from '../../utils/apply/object';
/**
 * @memberof op
 * @description Test
 * @param args
 * @example
 * import op from 'op';
 * import clear from 'op/clear';
 */
const clear = (...args) => apply(action(...args));
export default clear;
