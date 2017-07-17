import eachKeys from '../../utils/eachKeys';
import trasnformKeys from '../../utils/trasnformKeys';
import wrapper from '../../utils/wrapper';
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
 * @memberof ObjectActions
 * @description Convert object keys to snake_case.
 * @returns {Function}
 * @see {@link op.recursive#toSnakeCase}
 * @example
 *
 * import toSnakeCase from 'op/toSnakeCase';
 *
 * op.toSnakeCase()({fooBar:1, foo_bar:2, bar:3, Foo:4})
 * // => {foo_bar:1, foo_bar:2, bar:3, foo:4}
 *
 */
const toSnakeCase = () => {
  return origin =>
    eachKeys(origin, (key, value) => ({ key: snakeCase(key), value: value }));
};

export default wrapper(toSnakeCase);
