import action from '../../../actions/object/rename';
import recursiveApply from '../../../utils/recursiveApply/object';
/**
 * @memberof op.recursive
 * @description Test
 * @param args
 */
const rename = (...args) => recursiveApply(action(...args));
export default rename;
