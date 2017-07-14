import eachKeys from '../utils/eachKeys';

/**
 * Rename state by config
 *
 * @memberof rmk
 * @description By default action parse object.
 * For recursive flow use rmk.recursive(rmk.rename(config))(data)
 * @param {Object} config Object with rename params {fromKey: 'toKey', ...}
 * @param {String} config.anykey Rename to const value
 * @param {Function} config.anykey  Rename to value by function.
 * @returns {Function} Returns function rename fields to object
 * @example
 *
 * import rmk from 'rmk';
 *
 * let formula = rmk(rmk.rename({
 *    oldValue: 'newValue',
 *    year: (localState) => {
 *       return localState.wasBorn ? 'birthYear' : 'deathYear'
 *    }
 * }))
 * let data = [
 *  {oldValue:1, year: 2001, wasBorn: true},
 *  {oldValue:1, year: 2008, wasBorn: false}
 * ]
 * formula(data)
 *
 * // or
 *
 * rmk.rename({
 *    oldValue: 'newValue',
 *    year: (localState) => {
 *       return localState.wasBorn ? 'birthYear' : 'deathYear'
 *    }
 * })(data)
 *
 * // => [
 *  {newValue:1, birthYear: 2001, wasBorn: true},
 *  {newValue:1, deathYear: 2008, wasBorn: false}
 * ]
 *
 */
const rename = function(config = {}) {
  return origin => {
    let newKey;
    return eachKeys(origin, (key, value) => {
      if (config.hasOwnProperty(key)) {
        newKey = typeof config[key] === 'function'
          ? config[key](origin)
          : config[key];
      } else {
        newKey = key;
      }

      return { key: newKey, value: value };
    });
  };
};

export default rename;
