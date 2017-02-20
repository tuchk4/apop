/** @module rmk/clear */

import reduce from 'lodash/reduce';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
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
module.exports = (config = {}) => object => {
  return reduce(object, (result, value, key) => {
      if (isNull(value) || isUndefined(value)) {
          return result;
      }
      result[key] = value;
      return result;
    }, {});
};
