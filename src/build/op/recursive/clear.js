import action from '../../../actions/object/clear';
import recursiveApply from '../../../utils/recursiveApply/object';
/**
 * @memberof op.recursive
 * @description Test
 * @param args
 */
const clear = (...args) => recursiveApply(action(...args));
export default clear;
