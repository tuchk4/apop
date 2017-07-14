import action from '../../actions/each';
import { recursiveApply } from '../../utils/apply';

export default config => recursiveApply(action(config));
