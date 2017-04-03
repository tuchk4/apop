import reduce from 'lodash/reduce';
import isArrayLike from 'lodash/isArrayLike';

const defaultConfig = {
  emptyArray: true,
  emptyObject: true,
  emptyString: true,
  nullValue: true,
  undefinedValue: true,
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
        let cond = false;

        const isArrayLikeCond = isArrayLike(value);
        if (isArrayLikeCond) {
          if (config.emptyArray) {
            cond |= Array.isArray(value) && value.length === 0;
          }
          if (config.emptyObject) {
            cond |= Object.keys(value).length === 0;
          }
          if (config.emptyString) {
            cond |= value === '';
          }
        }

        if (config.nullValue) {
          cond |= value === null;
        }
        if (config.undefinedValue) {
          cond |= value === undefined;
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
