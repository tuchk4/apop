import action from '../../../actions/object/each';
import recursiveApply from '../../../utils/recursiveApply/object';

export default (...args) => recursiveApply(action(...args));
