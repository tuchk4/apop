import action from './index';
import rmkParse from '../../utils/parse';

export default () =>
  rmkParse({
    actions: [action()],
    isRecursive: false,
  });
