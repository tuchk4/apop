import action from '../../actions/toSnakeCase';
import { recursiveApply } from './../../utils/apply';
import wrapper from '../../utils/wrapper';

export default wrapper(recursiveApply(action));
