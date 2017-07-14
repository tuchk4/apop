import clear from './actions/clear';
import toSnakeCase from './actions/toSnakeCase';
import toCamelCase from './actions/toCamelCase';
import update from './actions/update';
import rename from './actions/rename';
import each from './actions/each';

import { apply, recursiveApply } from './utils/apply';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };
Object.keys(sourceActions).forEach(key => {
  sourceActions[key].shortcut = true;
  sourceActions[key].key = key;
  sourceActions[key].constructor.shortcut = true;
  sourceActions[key].constructor.key = key;
  sourceActions[key].prototype.shortcut = true;
  sourceActions[key].prototype.key = key;
  Object.assign(sourceActions[key], { shortcut: true, key: key });
  console.log('sourceActions[key]', sourceActions[key]);
});

const op = Object.assign(
  function(...args) {
    console.log('op init');
    return apply(...args);
  },
  sourceActions
);
const recursive = Object.assign(
  function(...args) {
    console.log('op.recursive init');
    return recursiveApply(...args);
  },
  sourceActions
);

export default Object.assign(op, { recursive });
