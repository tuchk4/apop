import wrapper from '../../utils/wrapper';

/**
 *
 * @memberof ObjectActions
 * @description By default action parse object. For recursive flow use op.recursive(op.update(config))(data)
 * @param {Object} config Object with update params {newKey: 'const', newKeyFn: state => state.id, ...}
 * @param {String} config.${anykey} Set const value
 * @param {Function} config.${anykey} Set value by function
 * @returns {Function}
 * @see {@link OP.md#op.update|op.update}
 * @see {@link OP.md#op.recursive.update|op.recursive.update}
 * @example
 *
 * import update from 'op/update';
 *
 * op.update({
 *   bar: 3,
 *   year: (state) => state.date.getFullYear()
 * })({
 *   foo:1,
 *   date: new Date(2001)
 * });
 * // => {foo:1, bar:3, date: new Date(2001), year: 2001}
 *
 */
const update = (config = {}) => {
  return origin => {
    const changed = {};
    for (let key in config) {
      if (config.hasOwnProperty(key)) {
        if (typeof config[key] === 'function') {
          changed[key] = config[key](origin);
        } else {
          changed[key] = config[key];
        }
      }
    }

    return { ...origin, ...changed };
  };
};

export default wrapper(update);
