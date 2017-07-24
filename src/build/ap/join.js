import action from '../../actions/array/join';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const join = (...args) => apply(action(...args));

export default join;
