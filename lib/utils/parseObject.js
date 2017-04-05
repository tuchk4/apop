import flow from 'lodash/flow';
import isMap from 'lodash/isMap';
import * as mapUtils from './map';

/**
 * Parse object fields
 * @memberof utils
 * @param {Object} origin Origin object
 * @param {Array} actions Array of transform actions
 *
 * @returns {Object} Transformed object by actions
 */
const parseObject = (origin, actions) => {
  if (isMap(origin)) {
    origin = mapUtils.decode(origin);
  }
  return flow(actions)({ ...origin });
};
export default parseObject;
