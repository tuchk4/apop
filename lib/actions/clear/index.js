import reduce from 'lodash/reduce';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';

/**
 * Function of clear object keys from null and undefined values
 *
 * @memberof actions
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
const clear = () => object => reduce(object, (result, value, key) => {
  const isEmptyArray = isArray(value) && isEmpty(value);
  const isEmptyObject = isPlainObject(value) && isEmpty(value);
  const isEmptyStr = isString(value) && isEmpty(value);

  const cond = !isNull(value) && !isUndefined(value)
    && !isEmptyArray && !isEmptyObject && !isEmptyStr;

  if (cond) {
    result[key] = value;
  }

  return result;
}, {});
export default clear;
