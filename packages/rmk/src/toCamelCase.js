import action from './actions/toCamelCase/toCamelCase';
import rmkParse from './utils/parse';

export default () =>
  rmkParse({
    actions: [action()],
    isRecursive: false,
  });
