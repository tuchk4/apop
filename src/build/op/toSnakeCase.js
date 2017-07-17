import action from '../../actions/object/toSnakeCase';
import apply from '../../utils/apply/object';

export default (...args) => apply(action(...args));
