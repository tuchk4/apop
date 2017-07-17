import eachKeys from '../../utils/eachKeys';
import trasnformKeys from '../../utils/trasnformKeys';
import wrapper from '../../utils/wrapper';

function camelCase(str) {
  const separator = 0x5f;
  const firstChar = str.charCodeAt(0);
  if (
    trasnformKeys.isDigit(firstChar) ||
    trasnformKeys.isUpper(firstChar) ||
    firstChar == separator
  ) {
    return str;
  }
  const out = [];
  let changed = false;
  if (trasnformKeys.isUpper(firstChar)) {
    changed = true;
    out.push(trasnformKeys.toLower(firstChar));
  } else {
    out.push(firstChar);
  }

  const length = str.length;
  for (let i = 1; i < length; ++i) {
    let c = str.charCodeAt(i);
    if (c === separator) {
      changed = true;
      c = str.charCodeAt(++i);
      if (isNaN(c)) {
        return str;
      }
      out.push(trasnformKeys.toUpperSafe(c));
    } else {
      out.push(c);
    }
  }
  return changed ? String.fromCharCode.apply(undefined, out) : str;
}

/**
 * Converts object keys to camelCase.
 *
 * @memberof ObjectActions
 * @description Convert object keys to camelCase.
 * @returns {Function}
 * @see {@link op.recursive#toCamelCase}
 * @example
 *
 * import toCamelCase from 'op/toCamelCase';
 *
 * op.toCamelCase()({fooBar:1, foo_bar:2, bar:3, Foo:4})
 * // => {fooBar:1, fooBar:2, bar:3, foo:4}
 *
 */
const toCamelCase = () => {
  return origin =>
    eachKeys(origin, (key, value) => ({ key: camelCase(key), value: value }));
};

export default wrapper(toCamelCase);
