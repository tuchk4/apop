import action from '../../../actions/object/toSnakeCase';
import recursiveApply from '../../../utils/recursiveApply/object';
/**
 * @memberof op.recursive
 * @description Test
 * @param args
 */
const toSnakeCase = (...args) => recursiveApply(action(...args));
export default toSnakeCase;
