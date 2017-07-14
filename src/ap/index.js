import crop from './actions/splice';
import filter from './actions/filter';
import join from './actions/join';
import map from './actions/map';
import remove from './actions/remove';
import sort from './actions/sort';
import swap from './actions/swap';

import { apply, recursiveApply } from './utils/apply';

const sourceActions = { crop, filter, join, map, remove, sort, swap };

const ap = Object.assign(
  function(...args) {
    console.log('ap init');
    return apply(...args);
  },
  sourceActions
);
const recursive = Object.assign(
  function(...args) {
    console.log('ap.recursive init');
    return recursiveApply(...args);
  },
  sourceActions
);

export default Object.assign(ap, { recursive });
