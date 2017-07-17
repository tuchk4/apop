import action from '../../actions/object/clear';
import apply from '../../utils/apply/object';

export default (...args) => apply(action(...args));
