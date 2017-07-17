import action from '../../../actions/array/join';
import recursiveApply from '../../../utils/recursiveApply/array';

/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const join = (...args) => recursiveApply(action(...args));

export default join;
