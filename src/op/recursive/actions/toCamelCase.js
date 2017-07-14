import action from '../../actions/toCamelCase';
import { recursiveApply } from './../../utils/apply';

export default () => recursiveApply(action());
