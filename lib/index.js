import rmkActions from './actions';
import rmkParse from './utils/parse';

const singleActions = {};
const recursiveActions = {};

Object.keys(rmkActions).forEach(action => {
  singleActions[action] = config =>
    rmkParse({
      actions: [rmkActions[action](config)],
      isRecursive: false,
    });

  recursiveActions[action] = config =>
    rmkParse({
      actions: [rmkActions[action](config)],
      isRecursive: true,
    });
});

const rmk = Object.assign(
  (...actions) => rmkParse({ actions, isRecursive: false }),
  singleActions
);
const recursive = Object.assign(
  (...actions) => rmkParse({ actions, isRecursive: true }),
  recursiveActions
);

export default Object.assign(rmk, { recursive });
