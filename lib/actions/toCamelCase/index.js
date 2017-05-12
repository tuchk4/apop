const utils = {
  isLower(char) {
    return char >= 0x61 && char <= 0x7a;
  },
  isUpper(char) {
    return char >= 0x41 && char <= 0x5a;
  },
  isDigit(char) {
    return char >= 0x30 && char <= 0x39;
  },
  toUpperSafe(char) {
    if (this.isLower(char)) {
      return char - 0x20;
    }
    return char;
  },
  toUpperSafe(char) {
    if (this.isLower(char)) {
      return char - 0x20;
    }
    return char;
  },
  toLower(char) {
    return char + 0x20;
  },
};
function camelCase(str) {
  const separator = 0x5f;
  const firstChar = str.charCodeAt(0);
  if (
    utils.isDigit(firstChar) ||
    utils.isUpper(firstChar) ||
    firstChar == separator
  ) {
    return str;
  }
  const out = [];
  let changed = false;
  if (utils.isUpper(firstChar)) {
    changed = true;
    out.push(utils.toLower(firstChar));
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
      out.push(utils.toUpperSafe(c));
    } else {
      out.push(c);
    }
  }
  return changed ? String.fromCharCode.apply(undefined, out) : str;
}
/**
 * Function of converts object keys to camelCase.
 *
 * @memberof rmk
 * @description By default action parse object. For recursive flow use rmk.recursive(rmk.toCamelCase())(data)
 * @returns {Function} Returns function transform object keys to camelCase
 * @example
 *
 * import rmk from 'rmk';
 *
 * let formula = rmk(rmk.toCamelCase())
 * let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
 * formula(data)
 * // or
 * rmk.toCamelCase()(data)
 * // => {fooBar:1, fooBar:2, bar:3, foo:4}
 *
 */
const toCamelCase = function() {
  return function(origin) {
    let newObject = {}, key;
    const keys = Object.keys(origin || {});
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      newObject[camelCase(key)] = origin[key];
    }
    return newObject;
  };
};
export default toCamelCase;
