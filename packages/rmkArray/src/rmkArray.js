import filter from './actions/filter';
import join from './actions/join';
import remove from './actions/remove';
import removeElements from './actions/removeElements';
import swap from './actions/swap';
import sort from './actions/sort';
import map from './actions/map';

import parse from './utils/parse';

const sourceActions = {filter, join, remove, removeElements,  swap, sort, map};
const singleActions = {};
const recursiveActions = {};

Object.keys(sourceActions).forEach(action => {
  singleActions[action] = (...args) =>
    parse({
      actions: [sourceActions[action](...args)],
      isRecursive: false,
    });

  recursiveActions[action] = (...args) =>
    parse({
      actions: [sourceActions[action](...args)],
      isRecursive: true,
    });
});

const rmkArray = Object.assign(
  (...actions) => parse({ actions, isRecursive: false }),
  singleActions
);

const recursive = Object.assign(
  (...actions) => parse({ actions, isRecursive: true }),
  recursiveActions
);

export default Object.assign(rmkArray, { recursive: recursive });
