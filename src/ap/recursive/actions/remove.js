import action from '../../actions/remove';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
