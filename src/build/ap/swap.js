import action from '../../actions/array/swap';
import apply from '../../utils/apply/array';

export default (...args) => apply(action(...args));
