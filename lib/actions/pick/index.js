import lodashPick from 'lodash/pick';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import invert from 'lodash/invert';

import updateAction from '../update';
import renameAction from '../rename';

const renameObject = (config, origin) => {
  const renameFields = Object.keys(config).filter(key => !isFunction(config[key]));
  if (isEmpty(renameFields)) {
    return origin;
  }
  const renameConfig = invert(lodashPick(config, renameFields));
  return renameAction(renameConfig)(origin);
};

const updateObject = (config, origin) => {
  const updateFields = Object.keys(config).filter(key => isFunction(config[key]));
  if (isEmpty(updateFields)) {
    return origin;
  }
  const updateConfig = lodashPick(config, updateFields);
  return updateAction(updateConfig)(origin);
};
/**
 * Function of pick object keys and calculate other keys
 *
 * @memberof actions
 * @param {Array|Object} config Keys
 * @returns {Object} Returns function for picking keys
 * @see {@link ../shortcuts#shortcuts.pick Shortcut method}
 * @example
 * import rmk from 'rmk';
 * import pick from 'rmk/actions/pick';
 *
 * let formula = rmk(pick(['id', 'name'))
 * let data = {id:1, name: "abc", createDate: "01.01.1970", "isActive": false}
 * formula(data)
 * // => {id:1, name: "abc"}
 *
 * let data = [
 *  {id:1, name: "abc", createDate: "01.01.1970", "isActive": false},
 *  {id:2, name: "bca", createDate: "01.02.1971", "isActive": true}
 *  ]
 * formula(data)
 *  // => [{id:1, name: "abc"}, {id:2, name: "bca"}]
 *
 *  let data = {id:1, value: "abc", createDate: "01.01.1970", "isActive": false}
 *  let formula = rmk(pick({
 *    id: 'id',
 *    name:'value',
 *    date: (localState) => new Date(localState.createDate)
 *  })
 * formula(data)
 *  // => {id: 1, name: "abc", date: new Date("01.01.1970")}
 *
 *  let data = [
 *    {id:1, value: "abc", createDate: "01.01.1970", "isActive": false}
 *    {id:2, value: "bca", createDate: "01.01.1971", "isActive": true}
 *  ]
 * formula(data)
 *  // => [
 *  //  {id: 1, name: "abc", date: new Date("01.01.1970")},
 *  //  {id: 2, name: "bca", date: new Date("01.01.1970")}
 *  // ]
 *
 */
const pick = config => (origin) => {
  if (isArray(config)) {
    return lodashPick(origin, config);
  } else if (isObject(config)) {
    const renamed = renameObject(config, origin);
    const updated = updateObject(config, renamed);

    const keys = Object.keys(config);

    return lodashPick(updated, keys);
  }
  throw new Error('Bad arguments for pick action');
};

export default pick;
