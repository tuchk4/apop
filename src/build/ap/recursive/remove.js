import action from '../../../actions/array/remove';
import recursiveApply from '../../../utils/apply/recursiveArray';

/**
 * @memberof ap.recursive
 * @description Test
 * @param indexes
 */
const remove = (...indexes) => recursiveApply(action(...indexes));

export default remove;
