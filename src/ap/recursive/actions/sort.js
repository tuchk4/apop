import action from '../../actions/sort';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
