import clear from './actions/clear';
import toSnakeCase from './actions/toSnakeCase';
import toCamelCase from './actions/toCamelCase';
import update from './actions/update';
import rename from './actions/rename';
import each from './actions/each';

import parse from './utils/parse';

const sourceActions = {clear, toSnakeCase, toCamelCase, update, rename, each};
const singleActions = {};
const recursiveActions = {};

Object.keys(sourceActions).forEach(action => {
  singleActions[action] = config =>
    parse({
      actions: [sourceActions[action](config)],
      isRecursive: false,
    });

  recursiveActions[action] = config =>
    parse({
      actions: [sourceActions[action](config)],
      isRecursive: true,
    });
});

const rmk = Object.assign(
  (...actions) => parse({ actions, isRecursive: false }),
  singleActions
);
const recursive = Object.assign(
  (...actions) => parse({ actions, isRecursive: true }),
  recursiveActions
);

export default Object.assign(rmk, { recursive });
