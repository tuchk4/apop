import action from './../actions/update';
import rmkParse from './../utils/parse';

export default config =>
  rmkParse({
    actions: [action(config)],
    isRecursive: true,
  });
