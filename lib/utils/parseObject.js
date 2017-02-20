import flow from 'lodash/flow';

/**
 * Parse object fields
 * @memberof utils
 * @param {Object} origin Origin object
 * @param {Array} actions Array of transform actions
 * @see {@link actions}
 *
 * @returns {Object} Transformed object by actions
 */
const parseObject = (origin, actions) => {
  return flow(actions)(origin);
};
export default parseObject;