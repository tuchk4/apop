import action from '../../../actions/array/splice';
import recursiveApply from '../../../utils/recursiveApply/array';

/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const splice = (...args) => recursiveApply(action(...args));

export default splice;
