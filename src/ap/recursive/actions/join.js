import action from '../../actions/join';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
