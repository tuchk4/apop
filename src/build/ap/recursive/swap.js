import action from '../../../actions/array/swap';
import recursiveApply from '../../../utils/recursiveApply/array';

/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const swap = (...args) => recursiveApply(action(...args));

export default swap;
