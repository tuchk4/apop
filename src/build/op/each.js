import action from '../../actions/object/each';
import apply from '../../utils/apply/object';

export default (...args) => apply(action(...args));
