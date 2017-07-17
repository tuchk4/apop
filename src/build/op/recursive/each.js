import action from '../../../actions/object/each';
import recursiveApply from '../../../utils/recursiveApply/object';
/**
 * @memberof op.recursive
 * @description Test
 * @param args
 */
const each = (...args) => recursiveApply(action(...args));
export default each;
