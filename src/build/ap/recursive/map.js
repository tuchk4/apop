import action from '../../../actions/array/map';
import recursiveApply from '../../../utils/recursiveApply/array';

/**
 * @memberof ap.recursive
 * @description Test
 * @param args
 */
const map = (...args) => recursiveApply(action(...args));

export default map;
