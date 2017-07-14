import action from '../../actions/clear';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
