import eachKeys from '../utils/eachKeys';

const defaultConfig = {
  emptyArray: true,
  emptyObject: true,
  emptyString: true,
  nullValue: true,
  undefinedValue: true,
};
const emptyConfig = {
  emptyArray: false,
  emptyObject: false,
  emptyString: false,
  nullValue: false,
  undefinedValue: false,
};

/**
 * Function of clear object from null, undefined, empty string, empty array, empty objects values
 *
 * @memberof rmk
 * @description By default action parse object.  For recursive flow use rmk.recursive(rmk.clear())(data)
 * @param {Object} config
 * @param {Boolean} [config.emptyArray=true] - Clear []
 * @param {Boolean} [config.emptyObject=true] - Clear {}
 * @param {Boolean} [config.emptyString=true] - Clear ""
 * @param {Boolean} [config.nullValue=true] - Clear null
 * @param {Boolean} [config.undefinedValue=true] - Clear undefined
 * @returns {Function} Returns function clear object.
 * @example
 *
 * import rmk from 'rmk';
 *
 * let formula = rmk(rmk.clear({ // default all true
 *  nullValue: false,
 *  undefinedValue: false
 * }))
 * let data = {a:null, b: 0, c: null, d: {}, e: [], f: [1],  g: false, h: '', j: new Date(), k: 'test'}
 * formula(data)
 * // or
 * rmk.clear()(data)
 * // => {a:null, b: 0, c: null, f: [1],  g: false, j: new Date(), k: 'test'}
 *
 *
 *
 */
const clear = function(config = {}) {
  console.log('op.clear init');
  config = Object.keys(config).length > 0
    ? Object.assign({}, emptyConfig, config)
    : defaultConfig;

  return function(origin) {
    console.log('op.clear run');
    let valid;
    return eachKeys(origin, (key, value) => {
      valid = true;
      if (valid && config.emptyObject) {
        valid = value && value.constructor === Object
          ? Object.keys(value).length !== 0
          : true;
      }
      if (valid && config.emptyArray && value && value.constructor === Array) {
        valid = value.length > 0;
        if (valid && config.nullValue) {
          valid = value[0] !== null;
        }
        if (valid && config.undefinedValue) {
          valid = value[0] !== undefined;
        }
      }
      if (valid && config.emptyString) {
        valid = value !== '';
      }
      if (valid && config.nullValue) {
        valid = value !== null;
      }
      if (valid && config.undefinedValue) {
        valid = value !== undefined;
      }

      if (valid) {
        return { key, value };
      }
    });
  };
};

export default clear;
