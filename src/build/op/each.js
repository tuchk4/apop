import action from '../../actions/object/each';
import apply from '../../utils/apply/object';
/**
 * @memberof op
 * @description Test
 * @param args
 */
const each = (...args) => apply(action(...args));
export default each;
