import isFunction from 'lodash/isFunction';

/**
 * Update state by config
 *
 * @memberof actions
 * @param {Object|Function} config  {field: fn(state)} or {field: value}
 * @returns {Function} Returns function add new field to object
 * @see {@link ../shortcuts#shortcuts.update Shortcut method}
 * @example
 *
 * import update from 'rmk/actions/update';
 *
 * let formula = rmk(update({
 *    bar: 3
 * }))
 * let data = {foo:1}
 * formula(data)
 * // => {foo:1, bar:3}
 *
 * let data = [{foo:1}, {foo:2}]
 * formula(data)
 * // =>  [{foo:1, bar:3}, {foo:2, bar:3}]
 *
 * let formula = rmk(update({
 *     year: (state) => {
 *       return state.date.getFullYear()
 *     }
 * }))
 * let data = {date: new Date(2001)}
 * formula(data)
 * // => {date: new Date(2001), year: 2001}
 *
 * let data = [{date: new Date(2001)}, {date: new Date(2002)}]
 * // => [{date: new Date(2001), year: 2001}, {date: new Date(2002), year: 2002}]
 */
const update = (config = {}) =>
  object => {
    const newObject = {...object};


    if (isFunction(config)) {
      return config(newObject);
    } else {
      const oldObject = {...object};
      Object.keys(config).forEach(key => {
        if (isFunction(config[key])) {
          newObject[key] = config[key](oldObject);
        } else {
          newObject[key] = config[key];
        }
      });

      return newObject;
    }
  };

export default update;
