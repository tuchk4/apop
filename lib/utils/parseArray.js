import parseObject from './parseObject';
import isPlainObject from 'lodash/isPlainObject';
import isMap from 'lodash/isMap';

/**
 * Parse array elements
 * @memberof utils
 * @param {Array} origin Origin array
 * @param {Array} actions Array of transform actions
 *
 * @returns {Array} Transformed array of object by actions
 */
const parseArray = (origin, actions) =>
  [...origin].map(element => {
    const objectLike = isPlainObject(element) || isMap(element);
    return objectLike ? parseObject(element, actions) : element;
  });
export default parseArray;
