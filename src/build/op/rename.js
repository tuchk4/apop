import action from '../../actions/object/rename';
import apply from '../../utils/apply/object';

export default (...args) => apply(action(...args));
