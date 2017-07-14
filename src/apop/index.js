import op from '../op/index';
import ap from '../ap/index';
import opRecursive from '../op/recursive';
import apRecursive from '../ap/recursive';
import apply from './utils/apply';

import clear from '../op/actions/clear';
import toSnakeCase from '../op/actions/toSnakeCase';
import toCamelCase from '../op/actions/toCamelCase';
import update from '../op/actions/update';
import rename from '../op/actions/rename';
import each from '../op/actions/each';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };
const singleActions = {};

Object.keys(sourceActions).forEach(action => {
  singleActions[action] = (...args) => apply(sourceActions[action](...args));
});

const recursive = {
  op: opRecursive,
  ap: apRecursive,
};

export default Object.assign(
  (...actions) => apply(...actions),
  singleActions,
  op,
  ap,
  recursive
);
