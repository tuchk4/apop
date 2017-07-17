import action from '../../../actions/array/map';
import recursiveApply from '../../../utils/recursiveApply/array';

export default (...args) => recursiveApply(action(...args));
