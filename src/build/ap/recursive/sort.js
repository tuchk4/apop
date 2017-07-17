import action from '../../../actions/array/sort';
import recursiveApply from '../../../utils/recursiveApply/array';
/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const sort = (...args) => recursiveApply(action(...args));

export default sort;
