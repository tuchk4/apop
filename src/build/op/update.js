import action from '../../actions/object/update';
import apply from '../../utils/apply/object';
/**
 * @memberof op
 * @description Test
 * @param args
 */
const update = (...args) => apply(action(...args));
export default update;
