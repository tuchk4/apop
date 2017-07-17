import clear from '../../actions/object/clear';
import toSnakeCase from '../../actions/object/toSnakeCase';
import toCamelCase from '../../actions/object/toCamelCase';
import update from '../../actions/object/update';
import rename from '../../actions/object/rename';
import each from '../../actions/object/each';

import apply from './../../utils/apply/object';
import recursiveApply from './../../utils/recursiveApply/object';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };
/**
 * @namespace op
 * @type {Function|Object}
 */
const op = Object.assign(apply, sourceActions);
const recursive = Object.assign(recursiveApply, sourceActions);

export default Object.assign(op, { recursive });
