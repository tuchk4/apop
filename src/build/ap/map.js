import action from '../../actions/array/map';
import apply from '../../utils/apply/array';

export default (...args) => apply(action(...args));
