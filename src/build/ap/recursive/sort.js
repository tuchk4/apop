import action from '../../../actions/array/sort';
import recursiveApply from '../../../utils/apply/recursiveArray';
/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const sort = (...args) => recursiveApply(action(...args));

export default sort;
