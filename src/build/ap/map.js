import action from '../../actions/array/map';
import apply from '../../utils/apply/array';

/**
 * @memberof ap
 * @description Test
 * @param args
 */
const map = (...args) => apply(action(...args));

export default map;
