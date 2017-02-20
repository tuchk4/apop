import parseObject from '~/utils/parseObject';

/**
 * Parse array elements
 * @memberof utils
 * @param {Object} origin Origin array
 * @param {Array} actions Array of transform actions
 * @see {@link actions}
 *
 * @returns {Array} Transformed array of object by actions
 */
const parseArray = (origin, actions) => {
  return origin.map(element => parseObject(element, actions));
};

export default parseArray;