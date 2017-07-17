import action from '../../actions/object/toSnakeCase';
import apply from '../../utils/apply/object';
/**
 * @memberof op
 * @description Test
 * @param args
 */
const toSnakeCase = (...args) => apply(action(...args));
export default toSnakeCase;
