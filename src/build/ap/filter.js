import action from '../../actions/array/filter';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const filter = (...args) => apply(action(...args));

export default filter;
