import action from '../../actions/update';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
