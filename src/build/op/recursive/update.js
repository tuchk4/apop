import action from '../../../actions/object/update';
import recursiveApply from '../../../utils/recursiveApply/object';
/**
 * @memberof op.recursive
 * @description Test
 * @param args
 */
const update = (...args) => recursiveApply(action(...args));
export default update;
