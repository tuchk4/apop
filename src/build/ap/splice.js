import action from '../../actions/array/splice';
import apply from '../../utils/apply/array';

export default (...args) => apply(action(...args));
