/**
 * Convert Map to Object
 * @memberof utils
 * @param {Map} origin Origin array
 *
 * @returns {Object} Transformed array of object by actions
 */
export function decode(origin) {
  let obj = Object.create(null);
  for (let [k, v] of origin) {
    // We don’t escape the key '__proto__'
    // which can cause problems on older engines
    obj[k] = v;
  }
  return obj;
}
/**
 * Convert Object to Map
 * @memberof utils
 * @param {Object} origin Origin array
 *
 * @returns {Map} Transformed array of object by actions
 */
export function encode(origin) {
  let strMap = new Map();
  for (let k of Object.keys(origin)) {
    strMap.set(k, origin[k]);
  }
  return strMap;
}
export default { decode, encode };
