import action from '../../../actions/array/sort';
import recursiveApply from '../../../utils/recursiveApply/array';

export default (...args) => recursiveApply(action(...args));
