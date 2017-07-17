import action from '../../../actions/object/toSnakeCase';
import recursiveApply from '../../../utils/recursiveApply/object';

export default (...args) => recursiveApply(action(...args));
