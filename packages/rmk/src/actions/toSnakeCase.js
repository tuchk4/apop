import eachKeys from '../utils/eachKeys';
import trasnformKeys from '../utils/trasnformKeys';

const snakeCase = str => {
  const separator = 0x5f;
  const firstChar = str.charCodeAt(0);
  if (!trasnformKeys.isLower(firstChar)) {
    return str;
  }
  const length = str.length;
  let changed = false;
  const out = [];
  for (let i = 0; i < length; ++i) {
    const c = str.charCodeAt(i);
    if (trasnformKeys.isUpper(c)) {
      out.push(separator);
      out.push(trasnformKeys.toLower(c));
      changed = true;
    } else {
      out.push(c);
    }
  }
  return changed ? String.fromCharCode.apply(undefined, out) : str;
};

/**
 * Function of converts object keys to snake_case.
 *
 * @memberof rmk
 * @description By default action parse object. For recursive flow use rmk.recursive(rmk.toSnakeCase())(data)
 * @returns {Function} Returns function transform object keys to snake_case
 * @example
 *
 * import rmk from 'rmk';
 *
 * let formula = rmk(rmk.toSnakeCase())
 * let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
 * formula(data)
 * // or
 * rmk.toSnakeCase()(data)
 * // => {foo_bar:1, foo_bar:2, bar:3, foo:4}
 *
 */
const toSnakeCase = () =>
  origin =>
    eachKeys(origin, (key, value) => ({ key: snakeCase(key), value: value }));

export default toSnakeCase;
