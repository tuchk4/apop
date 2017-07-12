import clear from './clear';
import toSnakeCase from './toSnakeCase';
import toCamelCase from './toCamelCase';
import update from './update';
import rename from './rename';
import each from './each';

const sourceActions = {clear, toSnakeCase, toCamelCase, update, rename, each};
import rmkParse from './../utils/parse';

const recursiveActions = {};

Object.keys(sourceActions).forEach(action => {
  recursiveActions[action] = config =>
    rmkParse({
      actions: [sourceActions[action](config)],
      isRecursive: true,
    });
});

const recursive = Object.assign(
  (...actions) => rmkParse({ actions, isRecursive: true }),
  recursiveActions
);

export default recursive;
