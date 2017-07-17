import action from '../../../actions/array/remove';
import recursiveApply from '../../../utils/recursiveApply/array';

/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const remove = (...args) => recursiveApply(action(...args));

export default remove;
