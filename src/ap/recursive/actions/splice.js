import action from '../../actions/splice';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
