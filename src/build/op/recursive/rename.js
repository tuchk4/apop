import action from '../../../actions/object/rename';
import recursiveApply from '../../../utils/recursiveApply/object';

export default (...args) => recursiveApply(action(...args));
