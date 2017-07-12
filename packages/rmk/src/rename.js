import action from './actions/rename/rename';
import rmkParse from './utils/parse';

export default config =>
  rmkParse({
    actions: [action(config)],
    isRecursive: false,
  });
