import crop from '../actions/splice';
import filter from '../actions/filter';
import join from '../actions/join';
import map from '../actions/map';
import remove from '../actions/remove';
import sort from '../actions/sort';
import swap from '../actions/swap';

import { recursiveApply } from '../utils/apply';

const sourceActions = { crop, filter, join, map, remove, sort, swap };
const recursiveActions = {};

Object.keys(sourceActions).forEach(action => {
  recursiveActions[action] = (...args) =>
    recursiveApply(sourceActions[action](...args));
});

const recursive = Object.assign(
  (...actions) => recursiveApply(...actions),
  recursiveActions
);

export default recursive;
