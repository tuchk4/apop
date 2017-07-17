import action from '../../actions/object/toCamelCase';
import apply from '../../utils/apply/object';

export default (...args) => apply(action(...args));
