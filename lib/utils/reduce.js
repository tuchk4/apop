import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import parseArray from 'rmk/utils/parseArray';
import parseObject from 'rmk/utils/parseObject';

/**
 * Parse object or array
 * @memberof utils
 * @param {Object|Array} origin Origin object or array
 * @param {Array} actions Array of transform actions
 *
 * @returns {Object|Array} Transformed object or array by actions
 */
export default (origin, actions) => {
  if (isArray(origin)) {
    return parseArray(origin, actions);
  } else if (isPlainObject(origin)) {
    return parseObject(origin, actions);
  } else {
    return origin;
  }
};