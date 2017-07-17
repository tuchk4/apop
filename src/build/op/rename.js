import action from '../../actions/object/rename';
import apply from '../../utils/apply/object';

/**
 * @memberof op
 * @description Test
 * @param args
 */
const rename = (...args) => apply(action(...args));
export default rename;
