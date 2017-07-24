import eachKeys from '../../utils/eachKeys';
import wrapper from '../../utils/wrapper';

/**
 * @description By default action parse object.
 * For recursive flow use op.recursive(op.rename(config))(data)
 * @param {Object} config Object with rename params {fromKey: 'toKey', ...}
 * @returns {MiddlewareObjectFunction}
 * @see {@link OP.md#op.rename|op.rename}
 * @see {@link OP.md#op.recursive.rename|op.recursive.rename}
 * @example
 *
 * import rename from 'apop/op/rename';
 *
 * rename({
 *    oldValue: 'newValue',
 *    year: (localState) => {
 *       return localState.wasBorn ? 'birthYear' : 'deathYear'
 *    }
 * })({oldValue:1, year: 2001, wasBorn: true})
 *
 */
const rename = (config = {}) =>
  origin => {
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

export default wrapper(rename);
