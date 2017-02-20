import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import parseArray from '~/utils/parseArray';
import parseObject from '~/utils/parseObject';

/**
 * Parse object or array
 * @memberof utils
 * @param {Object|Array} origin Origin object or array
 * @param {Array} actions Array of transform actions
 * @see {@link actions}
 *
 * @returns {Object|Array} Transformed object or array by actions
 */
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