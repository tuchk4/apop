/**
 * Function of update object by config
 *
 * @memberof rmk
 * @description By default action parse object. For recursive flow use rmk.recursive(rmk.update(config))(data)
 * @param {Object} config Object with update params {newKey: 'const', newKeyFn: state => state.id, ...}
 * @param {String} config.anykey Set const value
 * @param {Function} config.anykey Set value by function
 * @returns {Function} Returns function update fields of object
 * @example
 *
 * import rmk from 'rmk';
 *
 * let formula = rmk(rmk.update({
 *    bar: 3,
 *    year: (state) => {
 *       return state.date.getFullYear()
 *     }
 * }))
 * let data = {foo:1, date: new Date(2001)}
 * formula(data)
 * // or
 * rmk.update()(data)
 * // => {foo:1, bar:3, date: new Date(2001), year: 2001}
 *
 */
const update = function(config = {}) {
  return function(origin) {
    const changed = {};
    for (var key in config) {
      if (config.hasOwnProperty(key)) {
        if (typeof config[key] === 'function') {
          changed[key] = config[key](origin);
        } else {
          changed[key] = config[key];
        }
      }
    }

    return Object.assign({}, origin, changed);
  };
};

export default update;
