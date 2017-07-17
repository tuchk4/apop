import action from '../../actions/array/remove';
import apply from '../../utils/apply/array';

export default (...args) => apply(action(...args));
