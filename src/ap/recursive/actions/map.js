import action from '../../actions/map';
import { recursiveApply } from './../../utils/apply';

export default config => recursiveApply(action(config));
