import action from '../../../actions/array/filter';
import recursiveApply from '../../../utils/recursiveApply/array';

/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const filter = (...args) => recursiveApply(action(...args));

export default filter;
