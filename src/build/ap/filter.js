import action from '../../actions/array/filter';
import apply from '../../utils/apply/array';

export default (...args) => apply(action(...args));
