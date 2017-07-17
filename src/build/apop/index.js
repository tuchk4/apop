import clear from '../../actions/object/clear';
import toSnakeCase from '../../actions/object/toSnakeCase';
import toCamelCase from '../../actions/object/toCamelCase';
import update from '../../actions/object/update';
import rename from '../../actions/object/rename';
import each from '../../actions/object/each';

import apply from './../../utils/apply/arrayOfObjects';
/**
 * Actions
 * @memberof op.clear
 * @memberof op.toSnakeCase
 * @type {{clear, toSnakeCase, toCamelCase, update, rename, each}}
 */
const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };

/**
 * @namespace apop
 * @type {Function|Object}
 */
const apop = Object.assign(apply, sourceActions);

export default apop;
