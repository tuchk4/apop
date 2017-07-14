import action from '../../actions/rename';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
