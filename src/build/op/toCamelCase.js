import action from '../../actions/object/toCamelCase';
import apply from '../../utils/apply/object';
/**
 * @memberof op
 * @description Test
 * @param args
 */
const toCamelCase = (...args) => apply(action(...args));
export default toCamelCase;
