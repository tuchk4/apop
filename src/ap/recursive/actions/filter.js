import action from '../../actions/filter';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
