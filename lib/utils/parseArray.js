import parseObject from './parseObject';

/**
 * Parse array elements
 * @memberof utils
 * @param {Object} origin Origin array
 * @param {Array} actions Array of transform actions
 *
 * @returns {Array} Transformed array of object by actions
 */
export default (origin, actions) => origin.map(element => parseObject(element, actions));
