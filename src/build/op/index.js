import clear from '../../actions/object/clear';
import toSnakeCase from '../../actions/object/toSnakeCase';
import toCamelCase from '../../actions/object/toCamelCase';
import update from '../../actions/object/update';
import add from '../../actions/object/add';
import rename from '../../actions/object/rename';
import each from '../../actions/object/each';

import apply from './../../utils/apply/object';
import recursiveApply from '../../utils/apply/recursiveObject';

const sourceActions = {
  clear,
  toSnakeCase,
  toCamelCase,
  update,
  add,
  rename,
  each,
  recursive: recursiveApply,
};

/**
 * @namespace op
 * @type {Function|Object}
 * @example
 *
 * // Init for each example:
 *
 * import opRecursive from 'apop/op/recursive/op';
 * import op from 'op';
 *
 * let deepData = {
 *   a: "",
 *   b : 1,
 *   c_d: null,
 *   dB: undefined,
 *   deep: {
 *     g: null,
 *     h: true,
 *     moreDeep: {kE: "", m_r:false}
 *   }
 *  };
 *
 *  let simpleData = {
 *   a: "",
 *   b : 1,
 *   c_d: null,
 *   dB: undefined
 * };
 *
 *  let eachRename = (key, value) => {
 *    return {key: `_${key}_`, value: value}
 *  };
 *
 *  let renameKeys = {
 *    a: state => `${state.b}_${typeof d}`
 *    b: 'newB',
 *    h: 'newH'
 *  };
 *  let updateKeys = {
 *    a: state => `${state.b}_${typeof d}`
 *    b: 'newB',
 *    h: 'newH'
 *  };
 */
const op = Object.assign(apply, sourceActions);

export default op;
