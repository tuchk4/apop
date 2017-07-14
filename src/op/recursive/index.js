import clear from './actions/clear';
import toSnakeCase from './actions/toSnakeCase';
import toCamelCase from './actions/toCamelCase';
import update from './actions/update';
import rename from './actions/rename';
import each from './actions/each';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };
import { recursiveApply } from '../utils/apply';

const recursiveActions = {};

Object.keys(sourceActions).forEach(action => {
  recursiveActions[action] = (...args) =>
    recursiveApply(sourceActions[action](args));
});

const recursive = Object.assign(
  (...actions) => recursiveApply(...actions),
  recursiveActions
);

export default recursive;
