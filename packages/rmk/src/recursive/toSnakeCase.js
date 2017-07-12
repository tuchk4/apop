import action from '../actions/toSnakeCase';
import rmkParse from './../utils/parse';

export default () =>
  rmkParse({
    actions: [action()],
    isRecursive: true,
  });
