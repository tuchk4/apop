import action from '../../actions/array/sort';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const sort = (...args) => apply(action(...args));

export default sort;
