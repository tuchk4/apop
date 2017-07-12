import clear from './clear';
import toSnakeCase from './toSnakeCase';
import toCamelCase from './toCamelCase';
import update from './update';
import rename from './rename';
import each from './each';

import rmkParse from './utils/parse';

const sourceActions = {clear, toSnakeCase, toCamelCase, update, rename, each};
const singleActions = {};
const recursiveActions = {};

Object.keys(sourceActions).forEach(action => {
  singleActions[action] = config =>
    rmkParse({
      actions: [sourceActions[action](config)],
      isRecursive: false,
    });

  recursiveActions[action] = config =>
    rmkParse({
      actions: [sourceActions[action](config)],
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
