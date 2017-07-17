import action from '../../../actions/object/toCamelCase';
import recursiveApply from '../../../utils/recursiveApply/object';
/**
 * @memberof op.recursive
 * @description Test
 * @param args
 */
const toCamelCase = (...args) => recursiveApply(action(...args));
export default toCamelCase;
