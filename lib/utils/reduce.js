import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import flow from 'lodash/flow';
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
const parseObject = (origin, actions) => {
  return flow(actions)(origin);
};

const parseArray = (origin, actions) => {
  return origin.map(element => parseObject(element, actions));
};

const reduce = (origin, actions) => {
  if (isArray(origin)) {
    return parseArray(origin, actions);
  } else if (isObject(origin)) {
    return parseObject(origin, actions);
  } else {
    throw new Error('Wrong input arguments');
  }
};
export default reduce;
// const rmk = (...actions) => {
//   return origin => reduce(origin, actions);
// };
// export default rmk;