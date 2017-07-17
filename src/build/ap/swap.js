import action from '../../actions/array/swap';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const swap = (...args) => apply(action(...args));

export default swap;
