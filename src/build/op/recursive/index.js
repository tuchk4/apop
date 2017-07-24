import clear from '../../../actions/object/clear';
import toSnakeCase from '../../../actions/object/toSnakeCase';
import toCamelCase from '../../../actions/object/toCamelCase';
import update from '../../../actions/object/update';
import rename from '../../../actions/object/rename';
import each from '../../../actions/object/each';

import recursiveApply from '../../../utils/apply/recursiveObject';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };

/**
 * @namespace op.recursive
 * @type {Function|Object}
 */
const recursive = Object.assign(recursiveApply, sourceActions);

export default recursive;
