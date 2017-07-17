import action from '../../actions/object/update';
import apply from '../../utils/apply/object';

export default (...args) => apply(action(...args));
