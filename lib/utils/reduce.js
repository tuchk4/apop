import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import parseArray from './parseArray';
import parseObject from './parseObject';

import isMap from 'lodash/isMap';
import isSet from 'lodash/isSet';

/**
 * Parse object or array
 * @memberof utils
 * @param {Object|Array} origin Origin object or array
 * @param {Array} actions Array of transform actions
 *
 * @returns {Object|Array} Transformed object or array by actions
 */
const reduce = (origin, actions) => {
  const arrayLike = isArray(origin) || isSet(origin);
  if (arrayLike) {
    return parseArray(origin, actions);
  }

  const objectLike = isPlainObject(origin) || isMap(origin);
  if (objectLike) {
    return parseObject(origin, actions);
  }

  return origin;
};
export default reduce;
