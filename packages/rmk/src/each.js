import action from './actions/each/each';
import rmkParse from './utils/parse';

export default config =>
  rmkParse({
    actions: [action(config)],
    isRecursive: false,
  });
