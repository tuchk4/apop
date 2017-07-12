import action from '../actions/toSnakeCase/toSnakeCase';
import rmkParse from './../utils/parse';

export default () =>
  rmkParse({
    actions: [action()],
    isRecursive: true,
  });
