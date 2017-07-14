import clear from './actions/clear';
import toSnakeCase from './actions/toSnakeCase';
import toCamelCase from './actions/toCamelCase';
import update from './actions/update';
import rename from './actions/rename';
import each from './actions/each';

import { apply, recursiveApply } from './utils/apply';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };

const op = Object.assign(apply, sourceActions);
const recursive = Object.assign(recursiveApply, sourceActions);

export default Object.assign(op, { recursive });
