import action from '../../../actions/array/join';
import recursiveApply from '../../../utils/recursiveApply/array';

export default (...args) => recursiveApply(action(...args));
