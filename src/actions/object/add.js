import wrapper from '../../utils/wrapper';

/**
 *
 * @description By default action parse object. For recursive flow use op.recursive(op.add(config))(data)
 * @param {Object} config Object with add params {newKey: 'const', newKeyFn: state => state.id, ...}
 * @returns {MiddlewareObjectFunction}
 * @see {@link OP.md#op.add|op.add}
 * @see {@link OP.md#op.recursive.add|op.recursive.add}
 * @example
 *
 * import add from 'apop/op/add';
 *
 * op.add({
 *   bar: 3,
 *   year: (state) => state.date.getFullYear()
 * })({
 *   foo:1,
 *   date: new Date(2001)
 * });
 * // => {foo:1, bar:3, date: new Date(2001), year: 2001}
 *
 */
const add = (config = {}) =>
  origin => {
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

export default wrapper(add);
