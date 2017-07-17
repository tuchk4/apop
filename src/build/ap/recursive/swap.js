import action from '../../../actions/array/swap';
import recursiveApply from '../../../utils/recursiveApply/array';

export default (...args) => recursiveApply(action(...args));
