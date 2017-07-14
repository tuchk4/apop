import action from '../../actions/toSnakeCase';
import { recursiveApply } from './../../utils/apply';

export default () => recursiveApply(action());
