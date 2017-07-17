import action from '../../../actions/array/filter';
import recursiveApply from '../../../utils/recursiveApply/array';

export default (...args) => recursiveApply(action(...args));
