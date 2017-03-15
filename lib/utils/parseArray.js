import parseObject from './parseObject';
import isPlainObject from 'lodash/isPlainObject';

/**
 * Parse array elements
 * @memberof utils
 * @param {Object} origin Origin array
 * @param {Array} actions Array of transform actions
 *
 * @returns {Array} Transformed array of object by actions
 */
const parseArray = (origin, actions) =>
  origin.map(
    element => isPlainObject(element) ? parseObject(element, actions) : element
  );
export default parseArray;
