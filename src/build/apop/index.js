import clear from '../../actions/object/clear';
import toSnakeCase from '../../actions/object/toSnakeCase';
import toCamelCase from '../../actions/object/toCamelCase';
import update from '../../actions/object/update';
import rename from '../../actions/object/rename';
import each from '../../actions/object/each';

import apply from './../../utils/apply/arrayOfObjects';

const sourceActions = { clear, toSnakeCase, toCamelCase, update, rename, each };

export default Object.assign(apply, sourceActions);
