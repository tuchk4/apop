import action from '../actions/toCamelCase';
import rmkParse from './../utils/parse';

export default () =>
  rmkParse({
    actions: [action()],
    isRecursive: true,
  });
