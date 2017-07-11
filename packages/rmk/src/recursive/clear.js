import action from './../actions/clear';
import rmkParse from './../utils/parse';

export default config =>
  rmkParse({
    actions: [action(config)],
    isRecursive: false,
  });
