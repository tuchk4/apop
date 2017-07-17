import action from '../../../actions/object/clear';
import recursiveApply from '../../../utils/recursiveApply/object';

export default (...args) => recursiveApply(action(...args));
