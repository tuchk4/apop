import action from '../../actions/array/splice';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const splice = (...args) => apply(action(...args));

export default splice;
