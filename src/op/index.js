import clear from './actions/clear';
import toSnakeCase from './actions/toSnakeCase';
import toCamelCase from './actions/toCamelCase';
import update from './actions/update';
import rename from './actions/rename';
import each from './actions/each';

import { apply, recursiveApply } from './utils/apply';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };
const hackActions = {};

Object.keys(sourceActions).forEach(key => {
  hackActions[key] = (...args) =>
    Object.assign(sourceActions[key](...args), { shortcut: true, key });
});

const op = Object.assign((...args) => apply(...args), hackActions);
const recursive = Object.assign(
  (...args) => recursiveApply(...args),
  hackActions
);

export default Object.assign(op, { recursive });
