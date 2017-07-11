import rmkActions from './../actions';
import rmkParse from './../utils/parse';

const recursiveActions = {};

Object.keys(rmkActions).forEach(action => {
  recursiveActions[action] = config =>
    rmkParse({
      actions: [rmkActions[action](config)],
      isRecursive: true,
    });
});

const recursive = Object.assign(
  (...actions) => rmkParse({ actions, isRecursive: true }),
  recursiveActions
);

export default recursive;
