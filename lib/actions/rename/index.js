import isFunction from 'lodash/isFunction';

/**
 * Rename state by config
 *
 * @memberof actions
 * @param {Object} config  {field: fn(state)} or {field: value}
 * @returns {Function} Returns function add new field to object
 * @see {@link ../shortcuts#shortcuts.rename Shortcut method}
 * @example
 *
 * import update from 'rmk/actions/update';
 *
 * let formula = rmk(rename({
 *    bar: 'baz'
 * }))
 * let data = {foo:1, bar:2}
 * formula(data)
 * // => {foo:1, baz:2}
 *
 * let data = [{bar:1}, {bar:2}]
 * formula(data)
 * // =>  [{baz:1}, {baz:2}]
 *
 * let formula = rmk(rename({
 *     year: (localState) => {
 *      return (localState.hasOwnProperty('customField') ? 'birthYear' : 'deathYear'
 *     }
 * }))
 * let data = {year: 2001, customField: true}
 * formula(data)
 * // => {birthYear: 2001}
 * let data = {year: 2001, customField: false}
 * formula(data)
 * // => {deathYear: 2001}
 *
 */
const rename = (config = {}) =>
  object => {
    const oldObject = {...object};
    const newObject = {};
    Object.keys(oldObject).forEach(key => {
      let newKey;
      const hasProperty = Object.prototype.hasOwnProperty.call(config, key);
      if (hasProperty) {
        newKey = isFunction(config[key]) ? config[key](oldObject) : config[key];
        if (newKey) {
          newObject[newKey] = oldObject[key];
        }
      } else {
        newObject[key] = oldObject[key];
      }
    });

    return newObject;
  };
export default rename;
