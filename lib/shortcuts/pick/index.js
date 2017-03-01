import rmk from '../../';
import rmkActions from '../../actions';

/**
 * Shortcuts of pick object keys and calculate other keys
 *
 * @memberof actions
 * @param {Array|Object} config Keys
 * @returns {Object} Returns function object with picked keys
 * @see {@link ../shortcuts#shortcuts.pick Shortcut method}
 * @example
 *
 * import pick from 'rmk/shortcuts/pick';
 *
 * let data = {id:1, name: "abc", createDate: "01.01.1970", "isActive": false}
 * pick(['id', 'name'])(data);
 * // => {id:1, name: "abc"}
 *
 * let data = [
 *  {id:1, name: "abc", createDate: "01.01.1970", "isActive": false},
 *  {id:2, name: "bca", createDate: "01.02.1971", "isActive": true}
 *  ]
 * pick(['id', 'name'])(data);
 *  // => [{id:1, name: "abc"}, {id:2, name: "bca"}]
 *
 *  let data = {id:1, value: "abc", birthDate: "01.01.1970", "isActive": false}
 *  pick({
 *    id: 'id',
 *    name:'value',
 *    date: (localState) => new Date(localState.createDate)
 *  })(data);
 *  // => {id: 1, name: "abc", date: new Date("01.01.1970")}
 *
 *  let data = [
 *    {id:1, value: "abc", birthDate: "01.01.1970", "isActive": false}
 *    {id:2, value: "bca", birthDate: "01.01.1971", "isActive": true}
 *  ]
 * pick({
 *    id: 'id',
 *    name:'value',
 *    date: (localState) => new Date(localState.createDate)
 *  })(data);
 *  // => [
 *  //  {id: 1, name: "abc", date: new Date("01.01.1970")},
 *  //  {id: 2, name: "bca", date: new Date("01.01.1970")}
 *  // ]
 *
 */
const pick = (origin, config) => rmk(rmkActions.pick(config))(origin);
export default pick;
