import action from '../../actions/swap';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
