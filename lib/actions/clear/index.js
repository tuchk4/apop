import reduce from 'lodash/reduce';
import isArrayLike from 'lodash/isArrayLike';
import isPlainObject from 'lodash/isPlainObject';

const defaultConfig = {
  emptyArray: true,
  emptyObject: true,
  emptyString: true,
  nullValue: true,
  undefinedValue: true,
};

const validNullAndUndefined = (value, config) => {
  let cond = false;
  if (config.nullValue) {
    cond |= value === null;
  }
  if (config.undefinedValue) {
    cond |= value === undefined;
  }
  return cond;
};

/**
 * Function of clear object keys from null and undefined values
 *
 * @memberof actions
 * @param {Object} [config  = {emptyArray: true, emptyObject: true,  emptyString: true,  nullValue: true,  undefinedValue: true }]
 * @returns {Object} Returns function clear object from undefined and null values
 * @see {@link ../shortcuts#shortcuts.clear Shortcut method}
 * @example
 *
 * import clear from 'rmk/actions/clear';
 *
 * let formula = rmk(clear())
 * let data = {foo:null, bar: 0, baz:null}
 * formula(data)
 * // => {bar:0}
 *
 * let data = {foo: new Date(), bar: {}, baz: [] }
 * formula(data)
 *  // => {foo: new Date()}
 *
 *  let data = {foo: "", bar: "foo", baz: [1] }
 * formula(data)
 *  // => {bar: "foo", baz: [1]}
 *
 *  let data = {foo: true, bar: false, baz: 1 }
 * formula(data)
 *  // => { foo: true, bar: false, baz: 1 }
 *
 */
const clear = (config = defaultConfig) =>
  object => {
    return reduce(
      object,
      (result, value, key) => {
        // console.log('parse',  key, value);
        let cond = false;

        const isArrayLikeCond = isArrayLike(value);
        if (isArrayLikeCond) {
          if (config.emptyArray && Array.isArray(value)) {
            if (value.length === 0) {
              cond |= true;
            } else {
              cond |= validNullAndUndefined(value[0], config);
            }
          }

          if (config.emptyObject && isPlainObject(value)) {
            cond |= Object.keys(value).length === 0;
          }

          if (config.emptyString && typeof value === 'string') {
            cond |=  value.length === 0;
          }
        }

        if (!cond) {
          cond |= validNullAndUndefined(value, config);
        }

        if (!cond) {
          result[key] = value;
        }

        return result;
      },
      {}
    );
  };
export default clear;
