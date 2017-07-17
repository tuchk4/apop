import action from '../../actions/array/remove';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const remove = (...args) => apply(action(...args));

export default remove;
