import action from '../../../actions/array/map';
import recursiveApply from '../../../utils/apply/recursiveArray';

/**
 * @memberof ap.recursive
 * @description Test
 * @param callback
 */
const map = callback => recursiveApply(action(callback));

export default map;
