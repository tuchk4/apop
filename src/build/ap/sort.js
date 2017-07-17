import action from '../../actions/array/sort';
import apply from '../../utils/apply/array';

export default (...args) => apply(action(...args));
