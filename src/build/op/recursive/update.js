import action from '../../../actions/object/update';
import recursiveApply from '../../../utils/recursiveApply/object';

export default (...args) => recursiveApply(action(...args));
